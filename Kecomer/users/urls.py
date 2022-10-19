from django.urls import path
from users.views import UserCreateView, UserDetailView, RequestPasswordResetEmail, ResetPasswordView
from users.routers import router


urlpatterns = [
    path('signup/', UserCreateView.as_view()),
    path('update/<int:pk>', UserDetailView.as_view()),
    path('users/set_password/', ResetPasswordView.as_view()),
    path('password/reset/<str:uid>/<str:token>', RequestPasswordResetEmail.as_view(), name='reset_user_password'),
]
# urlpatterns += router.urls