pipeline {

	agent any
	stages {
		
		

		
		stage("Build") {

			steps  {
				sh "sudo npm install"
      //sh "sudo npm run build"
        
			} 
    
        
		}


		stage("deploy") {
		
			
			steps {
				sh "sudo rm -rf /home/samuraiaj/magicbackend/*"
				sh "sudo cp -rf * /home/samuraiaj/magicbackend/"
				sh "sudo cp -rf /home/oche/samuraiaj/magic-env/.env /home/samuraiaj/magicbackend"
				sh "sudo su - samuraiaj && whoami"
				//sh "sudo systemctl restart magicfront.service"
                		
				
			}
			
			
}
}
    }
