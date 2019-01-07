import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("Join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("Join", { pageTitle: "Join" });
  } else {
    // To Do : 사용자 등록 
    // To Do : 사용자 로그인
    res.redirect(routes.home);
  }
}

export const getLogin = (req, res) => res.render("Login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
}

export const logout = (req, res) => {
  //ToDo: 로그아웃 처리
  res.redirect(routes.home);
}
export const users = (req, res) => res.render("Users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });