# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-11 00:31](#error-2025-12-11t0031130000) |  | dev | timeout | 11592.09s
[2026-01-03 00:30](#error-2026-01-03t0030020000) |  | dev | timeout | 11501.07s
[2026-01-05 00:34](#error-2026-01-05t0034160000) |  | dev | timeout | 11556.08s
[2026-01-05 07:56](#error-2026-01-05t0756350000) |  | dev | timeout | 11498.00s
[2026-01-07 00:30](#error-2026-01-07t0030380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92dd59b8466ea71f9a4/clusters/test-acc-tf-c-8841961841934328434 | dev | flaky_500 | 91.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 43 minutes
  - PASS 37 minutes
- 2025-12-11

### Error 2025-12-11T00:31:13+00:00
```
2025-12-11T00:31:13.8155750Z === RUN   TestAccSearchDeployment_basic
2025-12-11T00:31:22.0220882Z === CONT  TestAccSearchDeployment_basic
2025-12-11T03:41:57.6188477Z === NAME  TestAccSearchDeployment_basic
2025-12-11T03:41:57.6191508Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2025-12-11T03:41:57.6192028Z         
2025-12-11T03:41:57.6192489Z         Error: error during search deployment creation
2025-12-11T03:41:57.6192922Z         
2025-12-11T03:41:57.6193394Z           with mongodbatlas_search_deployment.test,
2025-12-11T03:41:57.6194363Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2025-12-11T03:41:57.6195495Z           45: 		resource "mongodbatlas_search_deployment" "test" {
2025-12-11T03:41:57.6195954Z         
2025-12-11T03:41:57.6196572Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-12-11T03:41:57.6197093Z         timeout: 3h0m0s)
2025-12-11T03:41:57.6197581Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-12-11T03:41:57.6198453Z         transient error, wait before retrying to allow resource deletion to finish
2025-12-11T03:42:28.1398960Z   diagnostic_detail=
2025-12-11T03:42:28.1403072Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment
2025-12-11T03:42:28.1457386Z   
2025-12-11T03:44:30.2937036Z --- FAIL: TestAccSearchDeployment_basic (11592.91s)
```

- 2025-12-12 PASS 43 minutes
- 2025-12-13 PASS 39 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 39 minutes
- 2025-12-16 PASS 36 minutes
- 2025-12-17 PASS 41 minutes
- 2025-12-18 PASS 41 minutes
- 2025-12-19 PASS 43 minutes
- 2025-12-20 PASS 35 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 41 minutes
- 2025-12-23 PASS 37 minutes
- 2025-12-24 PASS 41 minutes
- 2025-12-25 PASS 54 minutes
- 2025-12-26 PASS 36 minutes
- 2025-12-27 PASS 35 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 36 minutes
- 2025-12-31 PASS 41 minutes
- 2026-01-01 PASS 33 minutes
- 2026-01-02 PASS 40 minutes
- 2026-01-03

### Error 2026-01-03T00:30:02+00:00
```
2026-01-03T00:30:02.1118464Z === RUN   TestAccSearchDeployment_basic
2026-01-03T00:30:05.9697803Z === CONT  TestAccSearchDeployment_basic
2026-01-03T03:39:42.4189846Z === NAME  TestAccSearchDeployment_basic
2026-01-03T03:39:42.4190495Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-01-03T03:39:42.4191096Z         
2026-01-03T03:39:42.4191519Z         Error: error during search deployment creation
2026-01-03T03:39:42.4192001Z         
2026-01-03T03:39:42.4192329Z           with mongodbatlas_search_deployment.test,
2026-01-03T03:39:42.4192957Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2026-01-03T03:39:42.4193548Z           45: 		resource "mongodbatlas_search_deployment" "test" {
2026-01-03T03:39:42.4193859Z         
2026-01-03T03:39:42.4194285Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-03T03:39:42.4194688Z         timeout: 3h0m0s)
2026-01-03T03:39:42.4195155Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-03T03:39:42.4196007Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-03T03:41:44.9067397Z --- FAIL: TestAccSearchDeployment_basic (11501.67s)
```

- 2026-01-04: MISSING
- 2026-01-05
  - FAIL 3 hours

### Error 2026-01-05T00:34:16+00:00
```
2026-01-05T00:34:16.3790397Z === RUN   TestAccSearchDeployment_basic
2026-01-05T00:34:17.4537645Z === CONT  TestAccSearchDeployment_basic
2026-01-05T00:46:51.8726028Z   diagnostic_detail=
2026-01-05T00:46:51.8730299Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_proto_version=6.10 tf_req_id=d1fa41ba-68e6-0261-ee1b-c4efcc6506d9 tf_resource_type=mongodbatlas_search_deployment tf_rpc=ApplyResourceChange tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-01-05T01:08:49.6972831Z   diagnostic_detail=
2026-01-05T01:08:49.6976618Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_req_id=8a4ae722-8c40-d252-6639-dd4420200fd1 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-01-05T03:09:07.8576142Z   diagnostic_detail=
2026-01-05T03:09:07.8578953Z   
2026-01-05T03:43:51.3884954Z === NAME  TestAccSearchDeployment_basic
2026-01-05T03:43:51.3886004Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-01-05T03:43:51.3886568Z         
2026-01-05T03:43:51.3887009Z         Error: error during search deployment creation
2026-01-05T03:43:51.3887312Z         
2026-01-05T03:43:51.3887766Z           with mongodbatlas_search_deployment.test,
2026-01-05T03:43:51.3888677Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2026-01-05T03:43:51.3889787Z           45: 		resource "mongodbatlas_search_deployment" "test" {
2026-01-05T03:43:51.3890119Z         
2026-01-05T03:43:51.3890564Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-05T03:43:51.3890972Z         timeout: 3h0m0s)
2026-01-05T03:43:51.3891614Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-05T03:43:51.3892260Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-05T03:43:53.3739259Z    test_terraform_path=/home/runner/work/_temp/d4f9d5e4-d779-44ce-9ae8-7290dd7e3311/terraform test_working_directory=/tmp/plugintest2363990512 test_name=TestMigSearchDeployment_basic
2026-01-05T03:46:54.2269870Z --- FAIL: TestAccSearchDeployment_basic (11556.77s)
```

  - FAIL 3 hours

### Error 2026-01-05T07:56:35+00:00
```
2026-01-05T07:56:35.2849551Z === RUN   TestAccSearchDeployment_basic
2026-01-05T07:56:36.4450418Z === CONT  TestAccSearchDeployment_basic
2026-01-05T08:08:12.5045389Z   diagnostic_detail=
2026-01-05T08:08:12.5050499Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_proto_version=6.10
2026-01-05T08:29:23.1883924Z   diagnostic_detail=
2026-01-05T08:29:23.1888287Z    tf_rpc=ApplyResourceChange tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_req_id=10396c2e-1373-9222-630c-12427f9bbc09 tf_proto_version=6.10 tf_resource_type=mongodbatlas_search_deployment diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation"
2026-01-05T10:29:45.4876376Z   diagnostic_detail=
2026-01-05T10:29:45.4879768Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_proto_version=6.10
2026-01-05T10:29:45.4968327Z   
2026-01-05T11:05:41.7254638Z === NAME  TestAccSearchDeployment_basic
2026-01-05T11:05:41.7256871Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-01-05T11:05:41.7257505Z         
2026-01-05T11:05:41.7258126Z         Error: error during search deployment creation
2026-01-05T11:05:41.7258456Z         
2026-01-05T11:05:41.7258801Z           with mongodbatlas_search_deployment.test,
2026-01-05T11:05:41.7259733Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2026-01-05T11:05:41.7260358Z           45: 		resource "mongodbatlas_search_deployment" "test" {
2026-01-05T11:05:41.7260685Z         
2026-01-05T11:05:41.7261445Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-05T11:05:41.7261870Z         timeout: 3h0m0s)
2026-01-05T11:05:41.7262530Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-05T11:05:41.7263191Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-05T11:06:13.3679776Z   
2026-01-05T11:08:14.4548252Z --- FAIL: TestAccSearchDeployment_basic (11498.01s)
```

- 2026-01-06 PASS 37 minutes
- 2026-01-07

### Error 2026-01-07T00:30:38+00:00
```
2026-01-07T00:30:38.9231371Z === RUN   TestAccSearchDeployment_basic
2026-01-07T00:30:39.8501754Z === CONT  TestAccSearchDeployment_basic
2026-01-07T00:32:11.5630675Z === NAME  TestAccSearchDeployment_basic
2026-01-07T00:32:11.5631637Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:32:11.5632296Z         
2026-01-07T00:32:11.5632733Z         Error: Error in create
2026-01-07T00:32:11.5633154Z         
2026-01-07T00:32:11.5633758Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:32:11.5634899Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:32:11.5635846Z           13: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:32:11.5636392Z         
2026-01-07T00:32:11.5637189Z         cluster=test-acc-tf-c-8841961841934328434 didn't reach desired state: IDLE,
2026-01-07T00:32:11.5638060Z         error:
2026-01-07T00:32:11.5639345Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92dd59b8466ea71f9a4/clusters/test-acc-tf-c-8841961841934328434
2026-01-07T00:32:11.5640808Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:11.5641856Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:11.5642569Z         BadRequestDetail: 
2026-01-07T00:32:11.6081870Z --- FAIL: TestAccSearchDeployment_basic (91.76s)
```

- 2026-01-08 PASS 34 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 40 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 35 minutes
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
- 2026-01-05 PASS 32 minutes
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 36 minutes
