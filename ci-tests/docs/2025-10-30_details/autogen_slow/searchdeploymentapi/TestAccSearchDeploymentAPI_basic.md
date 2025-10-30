# autogen_slow/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 26 TestRuns in dev, qa from 2025-10-07 to 2025-10-30 from master branch: 1 unique tests, PASS(x 23) FAIL(x 3)
Success rate: 88.46%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 04:00](#error-2025-10-07t0400080000) |  | dev |  | 12604.07s
[2025-10-20 10:29](#error-2025-10-20t1029160000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60ea35a13b66d7cb7517f/clusters | dev | out_of_capacity | 4.05s
[2025-10-30 05:29](#error-2025-10-30t0529410000) |  | dev | timeout | 15102.09s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01: MISSING
- 2025-10-02: MISSING
- 2025-10-03: MISSING
- 2025-10-04: MISSING
- 2025-10-05: MISSING
- 2025-10-06: MISSING
- 2025-10-07

### Error 2025-10-07T04:00:08+00:00
```
2025-10-07T04:00:08.6117503Z === RUN   TestAccSearchDeploymentAPI_basic
2025-10-07T04:00:08.6118833Z === CONT  TestAccSearchDeploymentAPI_basic
2025-10-07T04:00:08.6134506Z   
2025-10-07T04:00:08.6135128Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-10-07T04:00:08.6135744Z         
2025-10-07T04:00:08.6136145Z         Error: Error in create
2025-10-07T04:00:08.6136521Z         
2025-10-07T04:00:08.6137053Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T04:00:08.6138115Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T04:00:08.6139093Z           17: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T04:00:08.6139583Z         
2025-10-07T04:00:08.6140521Z         cluster=test-acc-tf-c-1888733256921057311 didn't reach desired state: IDLE,
2025-10-07T04:00:08.6141300Z         error: context deadline exceeded
2025-10-07T04:00:08.6159899Z   
2025-10-07T04:00:08.6160865Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-07T04:00:08.6161578Z         
2025-10-07T04:00:08.6162062Z         Error: error when destroying resource
2025-10-07T04:00:08.6162496Z         
2025-10-07T04:00:08.6163051Z         error deleting project (68e45f0c507f48738a0974d3):
2025-10-07T04:00:08.6164224Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e45f0c507f48738a0974d3
2025-10-07T04:00:08.6165020Z         DELETE: HTTP 409 Conflict (Error code:
2025-10-07T04:00:08.6165911Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-10-07T04:00:08.6166956Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-10-07T04:00:08.6167705Z         Params: [], BadRequestDetail: 
2025-10-07T04:00:08.6168255Z --- FAIL: TestAccSearchDeploymentAPI_basic (12604.73s)
```

- 2025-10-08 PASS 37 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 45 minutes
- 2025-10-11 PASS 44 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 41 minutes
- 2025-10-14 PASS 37 minutes
- 2025-10-15 PASS 40 minutes
- 2025-10-16 PASS an hour
- 2025-10-17 PASS 39 minutes
- 2025-10-18 PASS 37 minutes
- 2025-10-19 PASS 39 minutes
- 2025-10-20
  - PASS 44 minutes
  - FAIL 4 seconds

### Error 2025-10-20T10:29:16+00:00
```
2025-10-20T10:29:16.0743760Z === RUN   TestAccSearchDeploymentAPI_basic
2025-10-20T10:29:16.0744473Z === CONT  TestAccSearchDeploymentAPI_basic
2025-10-20T10:29:16.0757242Z    test_terraform_path=/home/runner/work/_temp/148ce634-03cf-4333-a759-309ec67cd026/terraform test_name=TestAccSearchDeploymentAPI_basic test_working_directory=/tmp/plugintest46093153
2025-10-20T10:29:16.0758187Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-10-20T10:29:16.0758566Z         
2025-10-20T10:29:16.0758814Z         Error: Error in create
2025-10-20T10:29:16.0759054Z         
2025-10-20T10:29:16.0759380Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:29:16.0760023Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:29:16.0760810Z           17: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:29:16.0761138Z         
2025-10-20T10:29:16.0761549Z         cluster name: test-acc-tf-c-588811413580013806, API error details:
2025-10-20T10:29:16.0762233Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60ea35a13b66d7cb7517f/clusters
2025-10-20T10:29:16.0762925Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:29:16.0763565Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:29:16.0764055Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:29:16.0764406Z --- FAIL: TestAccSearchDeploymentAPI_basic (4.53s)
```

- 2025-10-21 PASS 34 minutes
- 2025-10-22
  - PASS 44 minutes
  - PASS 34 minutes
- 2025-10-23 PASS 58 minutes
- 2025-10-24 PASS an hour
- 2025-10-25 PASS 42 minutes
- 2025-10-26 PASS 34 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 38 minutes
- 2025-10-29 PASS 45 minutes
- 2025-10-30

### Error 2025-10-30T05:29:41+00:00
```
2025-10-30T05:29:41.7799235Z === RUN   TestAccSearchDeploymentAPI_basic
2025-10-30T05:29:41.7799878Z === CONT  TestAccSearchDeploymentAPI_basic
2025-10-30T05:29:41.7800685Z   diagnostic_detail=
2025-10-30T05:29:41.7803579Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment_api tf_req_id=e8229711-2419-11b8-a82d-6b841c843fee diagnostic_severity=ERROR diagnostic_summary="Error waiting for changes in Create"
2025-10-30T05:29:41.7810886Z    test_working_directory=/tmp/plugintest2705491660 test_name=TestAccSearchDeploymentAPI_basic
2025-10-30T05:29:41.7811521Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-10-30T05:29:41.7811887Z         
2025-10-30T05:29:41.7812203Z         Error: Error waiting for changes in Create
2025-10-30T05:29:41.7812506Z         
2025-10-30T05:29:41.7812861Z           with mongodbatlas_search_deployment_api.test,
2025-10-30T05:29:41.7813532Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2025-10-30T05:29:41.7814169Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2025-10-30T05:29:41.7814829Z         
2025-10-30T05:29:41.7815271Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-10-30T05:29:41.7815695Z         timeout: 1h0m0s)
2025-10-30T05:29:41.7816190Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-10-30T05:29:41.7816821Z         transient error, wait before retrying to allow resource deletion to finish
2025-10-30T05:29:41.7825375Z   
2025-10-30T05:29:41.7825846Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T05:29:41.7826282Z         
2025-10-30T05:29:41.7826537Z         Error: Error in delete
2025-10-30T05:29:41.7826796Z         
2025-10-30T05:29:41.7827211Z         cluster=test-acc-tf-c-7830231576889010693 didn't reach desired state:
2025-10-30T05:29:41.7827818Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T05:29:41.7828285Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T05:29:41.7828633Z --- FAIL: TestAccSearchDeploymentAPI_basic (15102.88s)
```
