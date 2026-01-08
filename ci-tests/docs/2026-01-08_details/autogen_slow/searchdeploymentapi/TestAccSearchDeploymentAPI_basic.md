# autogen_slow/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-11 01:46](#error-2025-12-11t0146060000) |  | dev | timeout | 4392.06s
[2026-01-03 01:44](#error-2026-01-03t0144350000) |  | dev | timeout | 4399.07s
[2026-01-05 01:50](#error-2026-01-05t0150290000) |  | dev | timeout | 4450.02s
[2026-01-07 00:34](#error-2026-01-07t0034000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da97dd59b8466ea7349ee/clusters/test-acc-tf-c-3892061091290469863 | dev | flaky_500 | 66.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 41 minutes
  - PASS 37 minutes
- 2025-12-11

### Error 2025-12-11T01:46:06+00:00
```
2025-12-11T01:46:06.8842927Z === RUN   TestAccSearchDeploymentAPI_basic
2025-12-11T01:46:06.8844173Z === CONT  TestAccSearchDeploymentAPI_basic
2025-12-11T01:46:06.8847320Z   diagnostic_detail=
2025-12-11T01:46:06.8849443Z    diagnostic_severity=ERROR tf_req_id=e6f77a80-972d-c207-dc42-f1b1a4795779 tf_proto_version=6.10
2025-12-11T01:46:06.8856680Z   
2025-12-11T01:46:06.8857123Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-12-11T01:46:06.8857767Z         
2025-12-11T01:46:06.8858098Z         Error: Error waiting for changes in Create
2025-12-11T01:46:06.8858388Z         
2025-12-11T01:46:06.8858741Z           with mongodbatlas_search_deployment_api.test,
2025-12-11T01:46:06.8859422Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2025-12-11T01:46:06.8860056Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2025-12-11T01:46:06.8860378Z         
2025-12-11T01:46:06.8860824Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-12-11T01:46:06.8861240Z         timeout: 1h0m0s)
2025-12-11T01:46:06.8861725Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-12-11T01:46:06.8862370Z         transient error, wait before retrying to allow resource deletion to finish
2025-12-11T01:46:06.8873535Z    test_working_directory=/tmp/plugintest3912323394
2025-12-11T01:46:06.8874139Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-12-11T01:46:06.8874579Z         
2025-12-11T01:46:06.8874879Z         Error: error when destroying resource
2025-12-11T01:46:06.8875390Z         
2025-12-11T01:46:06.8875739Z         error deleting project (693a1136b6470d4a0678bacf):
2025-12-11T01:46:06.8876335Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/693a1136b6470d4a0678bacf
2025-12-11T01:46:06.8876833Z         DELETE: HTTP 409 Conflict (Error code:
2025-12-11T01:46:06.8877383Z         "CANNOT_CLOSE_GROUP_MANAGED_DEPLOYMENTS") Detail: Cannot close group because
2025-12-11T01:46:06.8877992Z         there are active managed deployments. Reason: Conflict. Params: [],
2025-12-11T01:46:06.8878406Z         BadRequestDetail: 
2025-12-11T01:46:06.8878722Z --- FAIL: TestAccSearchDeploymentAPI_basic (4392.57s)
```

- 2025-12-12 PASS 44 minutes
- 2025-12-13 PASS 40 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 36 minutes
- 2025-12-16 PASS 36 minutes
- 2025-12-17 PASS 40 minutes
- 2025-12-18 PASS 41 minutes
- 2025-12-19 PASS 41 minutes
- 2025-12-20 PASS 36 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 40 minutes
- 2025-12-23 PASS 34 minutes
- 2025-12-24 PASS 40 minutes
- 2025-12-25 PASS 54 minutes
- 2025-12-26 PASS 35 minutes
- 2025-12-27 PASS 35 minutes
- 2025-12-28: MISSING
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

- 2026-01-06 PASS 36 minutes
- 2026-01-07

### Error 2026-01-07T00:34:00+00:00
```
2026-01-07T00:34:00.5281927Z === RUN   TestAccSearchDeploymentAPI_basic
2026-01-07T00:34:00.5282558Z === CONT  TestAccSearchDeploymentAPI_basic
2026-01-07T00:34:00.5294744Z    test_name=TestAccSearchDeploymentAPI_basic
2026-01-07T00:34:00.5295229Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:34:00.5295587Z         
2026-01-07T00:34:00.5295836Z         Error: Error in create
2026-01-07T00:34:00.5296091Z         
2026-01-07T00:34:00.5296407Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:34:00.5297030Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:34:00.5297619Z           17: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:34:00.5297929Z         
2026-01-07T00:34:00.5298372Z         cluster=test-acc-tf-c-3892061091290469863 didn't reach desired state: IDLE,
2026-01-07T00:34:00.5298773Z         error:
2026-01-07T00:34:00.5299465Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97dd59b8466ea7349ee/clusters/test-acc-tf-c-3892061091290469863
2026-01-07T00:34:00.5300251Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:34:00.5300817Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:34:00.5301198Z         BadRequestDetail: 
2026-01-07T00:34:00.5312529Z   
2026-01-07T00:34:00.5313006Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:34:00.5313432Z         
2026-01-07T00:34:00.5313722Z         Error: error when destroying resource
2026-01-07T00:34:00.5314005Z         
2026-01-07T00:34:00.5314333Z         error deleting project (695da97dd59b8466ea7349ee):
2026-01-07T00:34:00.5314898Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97dd59b8466ea7349ee
2026-01-07T00:34:00.5315382Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-07T00:34:00.5315910Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-07T00:34:00.5316526Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-07T00:34:00.5316964Z         Params: [], BadRequestDetail: 
2026-01-07T00:34:00.5317293Z --- FAIL: TestAccSearchDeploymentAPI_basic (66.47s)
```

- 2026-01-08 PASS 38 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 36 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 43 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 34 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 36 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 34 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 34 minutes
