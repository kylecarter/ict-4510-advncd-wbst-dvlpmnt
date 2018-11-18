# Generated by Django 2.1.3 on 2018-11-18 02:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Conversation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('contact', models.CharField(help_text='Name of the contact', max_length=255, verbose_name='Full Name')),
                ('email', models.EmailField(help_text='Contact email.', max_length=255, verbose_name='Email')),
                ('message', models.TextField(help_text='Message provided by the contact.', verbose_name='Message')),
                ('resolution', models.TextField(blank=True, help_text='Resolution if any for the conversation.', null=True, verbose_name='Resolution')),
            ],
        ),
    ]
