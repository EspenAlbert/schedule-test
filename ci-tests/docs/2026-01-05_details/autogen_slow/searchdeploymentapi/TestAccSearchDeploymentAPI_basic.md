# autogen_slow/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 5) FAIL(x 2)
Success rate: 71.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-03 01:44](#error-2026-01-03t0144350000) |  | dev | timeout | 4399.07s
[2026-01-05 01:50](#error-2026-01-05t0150290000) |  | dev | timeout | 4450.02s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30 PASS 38 minutes
- 2025-12-31 PASS 41 minutes
- 2026-01-01 PASS 32 minutes
- 2026-01-02 PASS 41 minutes
- 2026-01-03

### Error 2026-01-03T01:44:35+00:00
```
2026-01-03T01:44:35.7397810Z === RUN   TestAccSearchDeploymentAPI_basic
2026-01-03T01:44:35.7401006Z === CONT  TestAccSearchDeploymentAPI_basic
2026-01-03T01:44:35.7403173Z   diagnostic_detail=
2026-01-03T01:44:35.7406773Z    tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment_api tf_req_id=a8515f5e-5fdf-527b-9cbb-240834f3fcab tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10
2026-01-03T01:44:35.7413567Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/0259cd45-4bdf-44de-8b2a-2fac36585da7/terraform
2026-01-03T01:44:35.7414404Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-01-03T01:44:35.7414774Z         
2026-01-03T01:44:35.7415170Z         Error: Error waiting for changes in Create
2026-01-03T01:44:35.7415969Z         
2026-01-03T01:44:35.7416339Z           with mongodbatlas_search_deployment_api.test,
2026-01-03T01:44:35.7417023Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-01-03T01:44:35.7417658Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-01-03T01:44:35.7417987Z         
2026-01-03T01:44:35.7418428Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-03T01:44:35.7418842Z         timeout: 1h0m0s)
2026-01-03T01:44:35.7419337Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-03T01:44:35.7419979Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-03T01:44:35.7431708Z   
2026-01-03T01:44:35.7432187Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-03T01:44:35.7432626Z         
2026-01-03T01:44:35.7432931Z         Error: error when destroying resource
2026-01-03T01:44:35.7433208Z         
2026-01-03T01:44:35.7433545Z         error deleting project (6958635414ba9d26b467f96b):
2026-01-03T01:44:35.7434127Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6958635414ba9d26b467f96b
2026-01-03T01:44:35.7434612Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-03T01:44:35.7435152Z         "CANNOT_CLOSE_GROUP_MANAGED_DEPLOYMENTS") Detail: Cannot close group because
2026-01-03T01:44:35.7435963Z         there are active managed deployments. Reason: Conflict. Params: [],
2026-01-03T01:44:35.7436372Z         BadRequestDetail: 
2026-01-03T01:44:35.7436675Z --- FAIL: TestAccSearchDeploymentAPI_basic (4399.73s)
```

- 2026-01-04: MISSING
- 2026-01-05

### Error 2026-01-05T01:50:29+00:00
```
2026-01-05T01:50:29.1188879Z === RUN   TestAccSearchDeploymentAPI_basic
2026-01-05T01:50:29.1190542Z === CONT  TestAccSearchDeploymentAPI_basic
2026-01-05T01:50:29.1194850Z   diagnostic_detail=
2026-01-05T01:50:29.1200993Z    diagnostic_severity=ERROR tf_proto_version=6.10 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_req_id=a2071605-94de-e842-1578-75ef1b6f3354
2026-01-05T01:50:29.1215332Z   
2026-01-05T01:50:29.1216260Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-01-05T01:50:29.1216968Z         
2026-01-05T01:50:29.1217523Z         Error: Error waiting for changes in Create
2026-01-05T01:50:29.1218008Z         
2026-01-05T01:50:29.1218613Z           with mongodbatlas_search_deployment_api.test,
2026-01-05T01:50:29.1219874Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-01-05T01:50:29.1221060Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-01-05T01:50:29.1221640Z         
2026-01-05T01:50:29.1222438Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-05T01:50:29.1223156Z         timeout: 1h0m0s)
2026-01-05T01:50:29.1224005Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-05T01:50:29.1225084Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-05T01:50:29.1244329Z   
2026-01-05T01:50:29.1245164Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-05T01:50:29.1246044Z         
2026-01-05T01:50:29.1246553Z         Error: error when destroying resource
2026-01-05T01:50:29.1247019Z         
2026-01-05T01:50:29.1247609Z         error deleting project (695b0783964c3feeae0b6477):
2026-01-05T01:50:29.1248644Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695b0783964c3feeae0b6477
2026-01-05T01:50:29.1249492Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-05T01:50:29.1250462Z         "CANNOT_CLOSE_GROUP_MANAGED_DEPLOYMENTS") Detail: Cannot close group because
2026-01-05T01:50:29.1251649Z         there are active managed deployments. Reason: Conflict. Params: [],
2026-01-05T01:50:29.1252365Z         BadRequestDetail: 
2026-01-05T01:50:29.1252884Z --- FAIL: TestAccSearchDeploymentAPI_basic (4450.21s)
```


## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 34 minutes
- 2026-01-05: MISSING
