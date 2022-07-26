export interface IJwtResponse {
  //cramos un objeto ya que la api devuelve un objeto
  value: {
    //id : number,
    nombre: string,
    email: string,
    jwtToken: string,
    //accessToken: string, //para guardar el tojen en el localstorg
    expiresIn: string,
    
  }
}
