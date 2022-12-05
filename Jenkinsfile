pipeline {

	agent any
	stages {
		
		

		
		
		stage("Build") {

			steps  {
				sh "sudo npm i --force"
      				//sh "sudo npm run build"
        
			} 
    
        
		}


		stage("deploy") {
		
			
			steps {
				sh "sudo cp -rf * /home/samuraiaj/magicbackend"
				//sh "sudo pm2 stop kidsstoryillustrator"
				sh "sudo pm2 start /home/samuraiaj/magicbackend/ecosystem.config.js"
				sh "sudo pm2 save"
				//sh "sudo rm -rf /home/samuraiaj/magicbackend/*"
				//sh "sudo cp -rf /home/samuraiaj/magic-env/.env /home/samuraiaj/magicbackend"
				//sh "sudo su - samuraiaj && whoami"
				//sh "sudo systemctl restart magicback.service"
                		
				
			}
			
			
}
}
    }
