from .models import User, Doc, DocPower, DocContent, DocTemplate, Browse, Team, TeamMember, Favorite, Comment, Message


def login(name, password):
	user = User.objects.filter(name=name).first()
	if user is not None:
		if user.password == password:
			return True

	return False
