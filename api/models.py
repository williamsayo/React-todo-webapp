from django.db import models
import datetime

class Task(models.Model):
    task = models.CharField(max_length=200)
    date = models.DateField(default=datetime.date.today)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.task