package mindcoach.Services;

import java.util.List;

import mindcoach.Role;


public interface RoleService {
	
	public List<Role> getAllRoles(); 
	 public Role findRoleById(Long id); 
	 public Role addRole(Role role); 
	 public Role updateRole(Role role); 
	 public void deleletRole(Long id);

}
