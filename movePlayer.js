#pragma strict

var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 9.81;

private var moveDirection : Vector3 = Vector3.zero;


function Start () {

}

function Update () {
 var controller:CharacterController  = GetComponent.<CharacterController>(); 
	
	if(controller.isGrounded){
		moveDirection = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;
	}
	// Apply gravity
	moveDirection.y -= gravity * Time.deltaTime;
		
	// Move the controller
	controller.Move(moveDirection * Time.deltaTime);

}

function fixedUpdate(){


}