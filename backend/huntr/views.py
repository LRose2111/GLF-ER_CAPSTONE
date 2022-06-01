from http import server
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes, api_view
from rest_framework.views import APIView
from .models import Review, Reply, Listing
from .serializers import ReviewSerializer, ReplySerializer, ListingSerializer



@api_view(['GET'])
@permission_classes([AllowAny])
def GetAllListings(request):
    listings = Listing.objects.all()
    serializer = ListingSerializer(listings, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def UserListings(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ListingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        listings = Listing.objects.filter(user_id=request.user.id)
        serializer = ListingSerializer(listings, many=True)
        return Response(serializer.data)


@permission_classes([IsAuthenticated])
class ReviewActions(APIView):

    def post(self, request):
        serializers = ReplySerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save(user=request.user)
        return Response(serializers.data, status=status.HTTP_201_CREATED)

    def get(self, request, pk):
        listing_reviews = Listing.objects.filter(listing_id = pk)
        serializers = ReviewSerializer(listing_reviews, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)

    def delete(self, request, pk, format=None):
        review = get_object_or_404(Review, pk=pk)
        review.delete()
        return Response(status=status.HTTP_200_OK)


@permission_classes([IsAuthenticated])
class ListingLike(APIView):

    def get(self, request, pk):
        listing = Listing.objects.filter(id = pk)
        serializers = ListingSerializer(listing, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk, format=None):
        listing = get_object_or_404(Listing, pk=pk)
        serializer = ListingSerializer(listing)
        listing.likes += 1
        listing.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def patch(self, request, pk, format=None):
        listing = get_object_or_404(Listing, pk=pk)
        serializer = ListingSerializer(listing)
        listing.dislikes += 1
        listing.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    

@permission_classes([IsAuthenticated])
class ReplyDetails(APIView):

    def get(self, request, pk):
        replies = Reply.objects.filter(comment_id = pk)
        serializers = ReplySerializer(replies, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)


    def post(self, request, pk):
        comment_id = pk
        temp_data = request.data
        temp_data['comment_id'] = comment_id
        serializers = ReplySerializer(data=temp_data)
        serializers.is_valid(raise_exception=True)
        serializers.save(user=request.user)
        return Response(serializers.data, status=status.HTTP_201_CREATED)

