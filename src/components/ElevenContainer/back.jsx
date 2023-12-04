<div className="podiumCardContainer" key={item?._id}>
              <div className="nombreYComentario">
                <h3 className="podiumCard">{item?.name}</h3>
                <Link to={`/users/${item?.owner?._id}`}>
                  <p className="byAlguienP">By: {item?.owner?.name}</p>
                </Link>
              </div>
              <ComponentPaginacion />
              <div className="contenedorEleven">
                <div className="contenedorJugadorE goalkeeperE">
                  <div className="opcionJugador">
                    <img
                      className="imagenEleven"
                      src={item?.goalkeeper.image}
                      alt={item?.goalkeeper.name}
                    />
                    <h4 className="playerElevenName">{item?.goalkeeper.name}</h4>
                  </div>
                </div>
                <div className="contenedorJugadorE centrebackE">
                  <img
                    className="imagenEleven"
                    src={item?.centreback1.image}
                    alt={item?.centreback1.name}
                  />
                  <h4 className="playerElevenName">{item?.centreback1.name}</h4>
                </div>
                <div className="contenedorJugadorE centreback2E">
                  <img
                    className="imagenEleven"
                    src={item?.centreback2.image}
                    alt={item?.centreback2.name}
                  />
                  <h4 className="playerElevenName">{item?.centreback2.name}</h4>
                </div>
                <div className="contenedorJugadorE rightbackE">
                  <img
                    className="imagenEleven"
                    src={item?.rightback.image}
                    alt={item?.rightback.name}
                  />
                  <h4 className="playerElevenName">{item?.rightback.name}</h4>
                </div>
                <div className="contenedorJugadorE leftbackE">
                  <img
                    className="imagenEleven"
                    src={item?.leftback.image}
                    alt={item?.leftback.name}
                  />
                  <h4 className="playerElevenName">{item?.leftback.name}</h4>
                </div>
                <div className="contenedorJugadorE midfielder1E">
                  <img
                    className="imagenEleven"
                    src={item?.midfielder1.image}
                    alt={item?.midfielder1.name}
                  />
                  <h4 className="playerElevenName">{item?.midfielder1.name}</h4>
                </div>
                <div className="contenedorJugadorE midfielder2E">
                  <img
                    className="imagenEleven"
                    src={item?.midfielder2.image}
                    alt={item?.midfielder2.name}
                  />
                  <h4 className="playerElevenName">{item?.midfielder2.name}</h4>
                </div>
                <div className="contenedorJugadorE midfielder3E">
                  <img
                    className="imagenEleven"
                    src={item?.midfielder3.image}
                    alt={item?.midfielder3.name}
                  />
                  <h4 className="playerElevenName">{item?.midfielder3.name}</h4>
                </div>
                <div className="contenedorJugadorE forward1E">
                  <img
                    className="imagenEleven"
                    src={item?.forward1.image}
                    alt={item?.forward1.name}
                  />
                  <h4 className="playerElevenName">{item?.forward1.name}</h4>
                </div>
                <div className="contenedorJugadorE forward2E">
                  <img
                    className="imagenEleven"
                    src={item?.forward2.image}
                    alt={item?.forward2.name}
                  />
                  <h4 className="playerElevenName">{item?.forward2.name}</h4>
                </div>
                <div className="contenedorJugadorE forward3E">
                  <img
                    className="imagenEleven"
                    src={item?.forward3.image}
                    alt={item?.forward3.name}
                  />
                  <h4 className="playerElevenName">{item?.forward3.name}</h4>
                </div>
              </div>
              </div>