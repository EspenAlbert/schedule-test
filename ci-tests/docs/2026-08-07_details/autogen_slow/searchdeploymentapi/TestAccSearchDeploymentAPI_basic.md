# autogen_slow/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 22) FAIL(x 10)
Success rate: 68.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) |  | dev | flaky_500 | 38.06s
[2026-07-10 01:40](#error-2026-07-10t0140150000) |  | dev |  | 279.10s
[2026-07-11 00:48](#error-2026-07-11t0048400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.04s
[2026-07-16 00:49](#error-2026-07-16t0049450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.01s
[2026-07-18 00:46](#error-2026-07-18t0046020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-07-24 02:49](#error-2026-07-24t0249420000) |  | dev | timeout | 7625.02s
[2026-07-27 03:11](#error-2026-07-27t0311540000) |  | dev | timeout | 8480.06s
[2026-07-28 02:48](#error-2026-07-28t0248010000) |  | dev | timeout | 7367.10s
[2026-07-30 02:38](#error-2026-07-30t0238210000) |  | dev | timeout | 6853.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.2741862Z === RUN   TestAccSearchDeploymentAPI_basic
2026-07-09T01:36:44.2743210Z === CONT  TestAccSearchDeploymentAPI_basic
2026-07-09T01:36:44.2761096Z    test_name=TestAccSearchDeploymentAPI_basic
2026-07-09T01:36:44.2762154Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-09T01:36:44.2763173Z         
2026-07-09T01:36:44.2764034Z         Error: error creating project: test-acc-tf-p-8886489920908873285
2026-07-09T01:36:44.2764770Z         
2026-07-09T01:36:44.2765616Z           with mongodbatlas_project.test,
2026-07-09T01:36:44.2766841Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-09T01:36:44.2767967Z           13: 	resource "mongodbatlas_project" "test" {
2026-07-09T01:36:44.2768626Z         
2026-07-09T01:36:44.2769612Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-07-09T01:36:44.2770481Z         type
2026-07-09T01:36:44.2771055Z --- FAIL: TestAccSearchDeploymentAPI_basic (38.62s)
```

- 2026-07-10

### Error 2026-07-10T01:40:15+00:00
```
2026-07-10T01:40:15.0302320Z === RUN   TestAccSearchDeploymentAPI_basic
2026-07-10T01:40:15.0303231Z === CONT  TestAccSearchDeploymentAPI_basic
2026-07-10T01:40:15.0316228Z   
2026-07-10T01:40:15.0316684Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-10T01:40:15.0317105Z         
2026-07-10T01:40:15.0317405Z         Error: Error in create
2026-07-10T01:40:15.0317695Z         
2026-07-10T01:40:15.0318077Z           with mongodbatlas_advanced_cluster.test,
2026-07-10T01:40:15.0318800Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-10T01:40:15.0319469Z           17: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-07-10T01:40:15.0319824Z         
2026-07-10T01:40:15.0320336Z         cluster=test-acc-tf-c-3122586392526685216 didn't reach desired state: IDLE,
2026-07-10T01:40:15.0320788Z         error:
2026-07-10T01:40:15.0321565Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041c1e2b992f4d13b3b40/clusters/test-acc-tf-c-3122586392526685216
2026-07-10T01:40:15.0322404Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-07-10T01:40:15.0322855Z         BadRequestDetail: 
2026-07-10T01:40:15.0334613Z    test_step_number=1 test_name=TestAccSearchDeploymentAPI_basic
2026-07-10T01:40:15.0335317Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T01:40:15.0335926Z         
2026-07-10T01:40:15.0336267Z         Error: error when destroying resource
2026-07-10T01:40:15.0336591Z         
2026-07-10T01:40:15.0336984Z         error deleting project (6a5041c1e2b992f4d13b3b40):
2026-07-10T01:40:15.0337641Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041c1e2b992f4d13b3b40
2026-07-10T01:40:15.0338193Z         DELETE: HTTP 409 Conflict (Error code:
2026-07-10T01:40:15.0338800Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-07-10T01:40:15.0339497Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-07-10T01:40:15.0340008Z         Params: [], BadRequestDetail: 
2026-07-10T01:40:15.0340387Z --- FAIL: TestAccSearchDeploymentAPI_basic (279.97s)
```

- 2026-07-11

### Error 2026-07-11T00:48:40+00:00
```
2026-07-11T00:48:40.9382668Z === RUN   TestAccSearchDeploymentAPI_basic
2026-07-11T00:48:40.9383359Z === CONT  TestAccSearchDeploymentAPI_basic
2026-07-11T00:48:40.9395186Z   
2026-07-11T00:48:40.9395777Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-11T00:48:40.9396300Z         
2026-07-11T00:48:40.9396747Z         Error: error creating project: test-acc-tf-p-6724077796948456117
2026-07-11T00:48:40.9397132Z         
2026-07-11T00:48:40.9397466Z           with mongodbatlas_project.test,
2026-07-11T00:48:40.9398114Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-11T00:48:40.9398720Z           13: 	resource "mongodbatlas_project" "test" {
2026-07-11T00:48:40.9399043Z         
2026-07-11T00:48:40.9399539Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:48:40.9400227Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:48:40.9400848Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:48:40.9401293Z --- FAIL: TestAccSearchDeploymentAPI_basic (70.42s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS an hour
- 2026-07-15 PASS an hour
- 2026-07-16

### Error 2026-07-16T00:49:45+00:00
```
2026-07-16T00:49:45.2112124Z === RUN   TestAccSearchDeploymentAPI_basic
2026-07-16T00:49:45.2112822Z === CONT  TestAccSearchDeploymentAPI_basic
2026-07-16T00:49:45.2124436Z   
2026-07-16T00:49:45.2124871Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-16T00:49:45.2125289Z         
2026-07-16T00:49:45.2125756Z         Error: error creating project: test-acc-tf-p-2314839570601981099
2026-07-16T00:49:45.2126151Z         
2026-07-16T00:49:45.2126493Z           with mongodbatlas_project.test,
2026-07-16T00:49:45.2127172Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-16T00:49:45.2127799Z           13: 	resource "mongodbatlas_project" "test" {
2026-07-16T00:49:45.2128138Z         
2026-07-16T00:49:45.2128654Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:49:45.2129497Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:49:45.2130142Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:45.2130591Z --- FAIL: TestAccSearchDeploymentAPI_basic (94.10s)
```

- 2026-07-17 PASS an hour
- 2026-07-18

### Error 2026-07-18T00:46:02+00:00
```
2026-07-18T00:46:02.0673948Z === RUN   TestAccSearchDeploymentAPI_basic
2026-07-18T00:46:02.0674680Z === CONT  TestAccSearchDeploymentAPI_basic
2026-07-18T00:46:02.0685905Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/6c504f83-03b1-4070-a623-b77eeadda406/terraform test_working_directory=/tmp/plugintest1771688129
2026-07-18T00:46:02.0686925Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-18T00:46:02.0687334Z         
2026-07-18T00:46:02.0687782Z         Error: error creating project: test-acc-tf-p-2295620617439976444
2026-07-18T00:46:02.0688176Z         
2026-07-18T00:46:02.0688504Z           with mongodbatlas_project.test,
2026-07-18T00:46:02.0689151Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-18T00:46:02.0689760Z           13: 	resource "mongodbatlas_project" "test" {
2026-07-18T00:46:02.0690089Z         
2026-07-18T00:46:02.0690590Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:46:02.0691281Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:46:02.0691903Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:02.0692353Z --- FAIL: TestAccSearchDeploymentAPI_basic (67.19s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 57 minutes
- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8424836Z === RUN   TestAccSearchDeploymentAPI_basic
2026-07-23T02:04:19.8425532Z === CONT  TestAccSearchDeploymentAPI_basic
2026-07-23T02:04:19.8436943Z    test_terraform_path=/home/runner/work/_temp/d4daa10b-93d6-4e98-a409-c88064b3d8ab/terraform
2026-07-23T02:04:19.8437635Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-23T02:04:19.8438045Z         
2026-07-23T02:04:19.8438506Z         Error: error creating project: test-acc-tf-p-7953475457655107722
2026-07-23T02:04:19.8438898Z         
2026-07-23T02:04:19.8439226Z           with mongodbatlas_project.test,
2026-07-23T02:04:19.8439872Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-07-23T02:04:19.8440634Z           13: 	resource "mongodbatlas_project" "test" {
2026-07-23T02:04:19.8440972Z         
2026-07-23T02:04:19.8441492Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T02:04:19.8442189Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T02:04:19.8442816Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8443264Z --- FAIL: TestAccSearchDeploymentAPI_basic (62.04s)
```

- 2026-07-24

### Error 2026-07-24T02:49:42+00:00
```
2026-07-24T02:49:42.6940656Z === RUN   TestAccSearchDeploymentAPI_basic
2026-07-24T02:49:42.6941849Z === CONT  TestAccSearchDeploymentAPI_basic
2026-07-24T02:49:42.6955181Z   
2026-07-24T02:49:42.6955733Z     resource_test.go:26: Step 2/3 error: Error running apply: exit status 1
2026-07-24T02:49:42.6956239Z         
2026-07-24T02:49:42.6956665Z         Error: Error waiting for changes in Update
2026-07-24T02:49:42.6957071Z         
2026-07-24T02:49:42.6957521Z           with mongodbatlas_search_deployment_api.test,
2026-07-24T02:49:42.6958299Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-07-24T02:49:42.6959029Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-07-24T02:49:42.6959402Z         
2026-07-24T02:49:42.6959898Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-07-24T02:49:42.6960365Z         timeout: 1h0m0s)
2026-07-24T02:49:42.6968482Z    test_working_directory=/tmp/plugintest3279380930 test_name=TestAccSearchDeploymentAPI_basic
2026-07-24T02:49:42.6969284Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-24T02:49:42.6969773Z         
2026-07-24T02:49:42.6970131Z         Error: Error waiting for changes in Delete
2026-07-24T02:49:42.6970465Z         
2026-07-24T02:49:42.6970979Z         timeout while waiting for state to become 'DELETED' (last state: 'UPDATING',
2026-07-24T02:49:42.6971448Z         timeout: 10m0s)
2026-07-24T02:49:42.6971775Z --- FAIL: TestAccSearchDeploymentAPI_basic (7625.20s)
```

- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27

### Error 2026-07-27T03:11:54+00:00
```
2026-07-27T03:11:54.0970176Z === RUN   TestAccSearchDeploymentAPI_basic
2026-07-27T03:11:54.0971421Z === CONT  TestAccSearchDeploymentAPI_basic
2026-07-27T03:11:54.0975779Z   diagnostic_detail=
2026-07-27T03:11:54.0978937Z   
2026-07-27T03:11:54.0987541Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/3184e40c-fc66-4ab6-80ae-beebc2086960/terraform test_working_directory=/tmp/plugintest1547853775
2026-07-27T03:11:54.0988777Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-27T03:11:54.0989256Z         
2026-07-27T03:11:54.0989656Z         Error: Error waiting for changes in Create
2026-07-27T03:11:54.0990006Z         
2026-07-27T03:11:54.0990390Z           with mongodbatlas_search_deployment_api.test,
2026-07-27T03:11:54.0991152Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-07-27T03:11:54.0991877Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-07-27T03:11:54.0992245Z         
2026-07-27T03:11:54.0992738Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-07-27T03:11:54.0993244Z         timeout: 1h0m0s)
2026-07-27T03:11:54.0993791Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-07-27T03:11:54.0994501Z         transient error, wait before retrying to allow resource deletion to finish
2026-07-27T03:11:54.0995181Z --- FAIL: TestAccSearchDeploymentAPI_basic (8480.59s)
```

- 2026-07-28

### Error 2026-07-28T02:48:01+00:00
```
2026-07-28T02:48:01.6883751Z === RUN   TestAccSearchDeploymentAPI_basic
2026-07-28T02:48:01.6884839Z === CONT  TestAccSearchDeploymentAPI_basic
2026-07-28T02:48:01.6888504Z   diagnostic_detail=
2026-07-28T02:48:01.6890660Z    diagnostic_severity=ERROR
2026-07-28T02:48:01.6898547Z    test_step_number=1 test_name=TestAccSearchDeploymentAPI_basic
2026-07-28T02:48:01.6899194Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-28T02:48:01.6899628Z         
2026-07-28T02:48:01.6899990Z         Error: Error waiting for changes in Create
2026-07-28T02:48:01.6900323Z         
2026-07-28T02:48:01.6900720Z           with mongodbatlas_search_deployment_api.test,
2026-07-28T02:48:01.6901502Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-07-28T02:48:01.6902239Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-07-28T02:48:01.6902614Z         
2026-07-28T02:48:01.6903119Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-07-28T02:48:01.6903588Z         timeout: 1h0m0s)
2026-07-28T02:48:01.6904174Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-07-28T02:48:01.6904891Z         transient error, wait before retrying to allow resource deletion to finish
2026-07-28T02:48:01.6905590Z --- FAIL: TestAccSearchDeploymentAPI_basic (7367.96s)
```

- 2026-07-29 PASS an hour
- 2026-07-30

### Error 2026-07-30T02:38:21+00:00
```
2026-07-30T02:38:21.0311160Z === RUN   TestAccSearchDeploymentAPI_basic
2026-07-30T02:38:21.0312512Z === CONT  TestAccSearchDeploymentAPI_basic
2026-07-30T02:38:21.0313415Z   diagnostic_detail=
2026-07-30T02:38:21.0316666Z    tf_req_id=48ac0a55-b366-15cd-b74c-868aa21aec72 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.11 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment_api diagnostic_severity=ERROR diagnostic_summary="Error waiting for changes in Create"
2026-07-30T02:38:21.0325067Z    test_terraform_path=/home/runner/work/_temp/d5707fd9-7684-48e5-87e9-6210b133bd14/terraform test_working_directory=/tmp/plugintest3946860523
2026-07-30T02:38:21.0325960Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-30T02:38:21.0326375Z         
2026-07-30T02:38:21.0326720Z         Error: Error waiting for changes in Create
2026-07-30T02:38:21.0327047Z         
2026-07-30T02:38:21.0327430Z           with mongodbatlas_search_deployment_api.test,
2026-07-30T02:38:21.0328184Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-07-30T02:38:21.0328911Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-07-30T02:38:21.0329287Z         
2026-07-30T02:38:21.0329777Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-07-30T02:38:21.0330242Z         timeout: 1h0m0s)
2026-07-30T02:38:21.0330787Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-07-30T02:38:21.0332459Z         transient error, wait before retrying to allow resource deletion to finish
2026-07-30T02:38:21.0335236Z --- FAIL: TestAccSearchDeploymentAPI_basic (6853.41s)
```

- 2026-07-31 PASS 50 minutes
- 2026-08-01 PASS 52 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 53 minutes
- 2026-08-04 PASS 54 minutes
- 2026-08-05 PASS 51 minutes
- 2026-08-06 PASS 53 minutes
- 2026-08-07 PASS 54 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS an hour
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS an hour
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS an hour
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS an hour
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 49 minutes
  - PASS 54 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 51 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
