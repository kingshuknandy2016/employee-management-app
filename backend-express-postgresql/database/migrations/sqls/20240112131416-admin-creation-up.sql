/* Replace with your SQL commands */
INSERT INTO public.user_master(
	username, password,  "createdAt", "updatedAt", role)
	VALUES ('superadmin','$2b$08$qAw0Zdhs4AIS2joI5T5ihOhGleC9kvcaxKVGOZh7cYYz8icTFQAfq',now(),now(),'ADMIN');