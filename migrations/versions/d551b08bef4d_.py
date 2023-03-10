"""empty message

Revision ID: d551b08bef4d
Revises: 
Create Date: 2023-02-22 18:29:58.035019

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd551b08bef4d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('creador',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('image', sa.String(length=500), nullable=True),
    sa.Column('cursos', sa.String(length=2000), nullable=True),
    sa.Column('diplomas', sa.String(length=4500), nullable=True),
    sa.Column('trabajo', sa.String(length=1000), nullable=True),
    sa.Column('fechaintrab', sa.String(length=1000), nullable=True),
    sa.Column('fechafintrab', sa.String(length=1000), nullable=True),
    sa.Column('descrip', sa.String(length=256), nullable=True),
    sa.Column('contacto', sa.String(length=64), nullable=True),
    sa.Column('ubicacionx', sa.String(length=16), nullable=True),
    sa.Column('ubicaciony', sa.String(length=16), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('projects',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('category', sa.String(length=64), nullable=True),
    sa.Column('image', sa.String(length=500), nullable=False),
    sa.Column('title', sa.String(length=64), nullable=False),
    sa.Column('text', sa.String(length=2048), nullable=False),
    sa.Column('dataTime', sa.DateTime(), nullable=False),
    sa.Column('contact', sa.String(length=256), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('perfil',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comentario', sa.String(length=1024), nullable=True),
    sa.Column('puntaje', sa.Integer(), nullable=True),
    sa.Column('dataTime', sa.DateTime(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('creador_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['creador_id'], ['creador.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('text', sa.String(length=1024), nullable=False),
    sa.Column('dataTime', sa.DateTime(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('project_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['project_id'], ['projects.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('posts')
    op.drop_table('perfil')
    op.drop_table('projects')
    op.drop_table('creador')
    op.drop_table('user')
    # ### end Alembic commands ###
