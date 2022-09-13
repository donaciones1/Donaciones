
INSERT INTO [dbo].[Usuarios]
           ([Nombre]
           ,[Apellido],[EstaActivo])
     VALUES 
	  ('Sergio1','Cardoso1',1),
      ('Sergio2','Cardoso2',1),
      ('Sergio3','Cardoso3',1),
      ('Sergio4','Cardoso4',1)


INSERT INTO [dbo].[Estados]
           ([Nombre])
     VALUES 
      ('Abierto'),
      ('Cancelada'),
      ('Finalizada')

INSERT INTO [dbo].[Organizaciones]
           ([Nombre]
           ,[Descripcion]
           ,[ContactoId],[EstaActivo])
     VALUES
           ('Organizacion 1','Es la Organizacion 1',1,1),
		   ('Organizacion 2','Es la Organizacion 2',2,1),
		   ('Organizacion 3','Es la Organizacion 3',3,1),
		   ('Organizacion 4','Es la Organizacion 4',4,1)

INSERT INTO [dbo].[UsuarioOrganizaciones]
           ([UsuarioId]
           ,[OrganizacionId])
     VALUES
           (1,1),
		   (1,2),
		   (3,2),
		   (4,2)




