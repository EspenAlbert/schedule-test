# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL TIMEOUT
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:26](#error-2025-10-20t1026270000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e50de46041f56698987/clusters | dev | out_of_capacity | 2.06s
[2025-10-30 00:28](#error-2025-10-30t0028130000) |  | dev | timeout | 17994.00s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 46 minutes
- 2025-10-16 PASS an hour
- 2025-10-17 PASS 51 minutes
- 2025-10-18 PASS 45 minutes
- 2025-10-19 PASS 51 minutes
- 2025-10-20
  - PASS an hour
  - FAIL 2 seconds

### Error 2025-10-20T10:26:27+00:00
```
2025-10-20T10:26:27.1048542Z === RUN   TestAccSearchDeployment_timeoutTest
2025-10-20T10:26:30.6147072Z === CONT  TestAccSearchDeployment_timeoutTest
2025-10-20T10:26:31.4002631Z    test_name=TestAccSearchDeployment_basic test_terraform_path=/home/runner/work/_temp/bfc4fb77-856f-44ab-adc1-5536795b61a0/terraform
2025-10-20T10:26:31.6565521Z === NAME  TestAccSearchDeployment_timeoutTest
2025-10-20T10:26:31.6566300Z     resource_test.go:81: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-20T10:26:31.6566952Z         
2025-10-20T10:26:31.6567223Z         Error: Error in create
2025-10-20T10:26:31.6567475Z         
2025-10-20T10:26:31.6567809Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:26:31.6568454Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:26:31.6569039Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:26:31.6569353Z         
2025-10-20T10:26:31.6569767Z         cluster name: test-acc-tf-c-7806189344093345135, API error details:
2025-10-20T10:26:31.6570429Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e50de46041f56698987/clusters
2025-10-20T10:26:31.6571098Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:26:31.6571730Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:26:31.6572211Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:26:31.7027224Z --- FAIL: TestAccSearchDeployment_timeoutTest (2.59s)
```

- 2025-10-21 PASS 46 minutes
- 2025-10-22
  - PASS 55 minutes
  - PASS 45 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS 49 minutes
- 2025-10-25 PASS 44 minutes
- 2025-10-26 PASS 46 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 49 minutes
- 2025-10-29 PASS 54 minutes
- 2025-10-30

### Error 2025-10-30T00:28:13+00:00
```
2025-10-30T00:28:13.2379581Z === RUN   TestAccSearchDeployment_timeoutTest
2025-10-30T00:28:16.6883400Z === CONT  TestAccSearchDeployment_timeoutTest
2025-10-30T00:39:22.5602547Z   diagnostic_detail=
2025-10-30T00:39:22.5605446Z    diagnostic_severity=ERROR
2025-10-30T00:51:09.3580516Z   diagnostic_detail=
2025-10-30T00:51:09.3586127Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2025-10-30T02:51:31.0032393Z   diagnostic_detail=
2025-10-30T02:51:31.0036818Z   
2025-10-30T02:51:31.0109023Z     resource_test.go:82: Step 3/6 error: Error running apply: exit status 1
2025-10-30T02:51:31.0109805Z         
2025-10-30T02:51:31.0110244Z         Error: error during search deployment creation
2025-10-30T02:51:31.0110598Z         
2025-10-30T02:51:31.0111131Z           with mongodbatlas_search_deployment.test,
2025-10-30T02:51:31.0111997Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2025-10-30T02:51:31.0112881Z           45: resource "mongodbatlas_search_deployment" "test" {
2025-10-30T02:51:31.0113212Z         
2025-10-30T02:51:31.0113654Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-10-30T02:51:31.0114280Z         timeout: 1h40m0s)
2025-10-30T02:51:31.0114974Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-10-30T02:51:31.0115614Z         transient error, wait before retrying to allow resource deletion to finish
2025-10-30T03:37:52.5392211Z   diagnostic_detail=
2025-10-30T03:37:52.5399076Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_req_id=360deace-8877-38fa-4d86-11a21adfd7eb tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment
2025-10-30T03:37:52.5462818Z    test_name=TestAccSearchDeployment_basic
2025-10-30T05:28:10.5335056Z 		TestAccSearchDeployment_basic (4h59m54s)
2025-10-30T05:28:10.5335884Z 		TestAccSearchDeployment_multiRegion (4h59m54s)
2025-10-30T05:28:10.5336719Z 		TestAccSearchDeployment_timeoutTest (4h59m54s)
```

- 2025-10-31 PASS 57 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 48 minutes
- 2025-11-03 PASS 45 minutes
- 2025-11-04 PASS 52 minutes
- 2025-11-05
  - PASS 59 minutes
  - PASS 48 minutes
- 2025-11-06 PASS 59 minutes
- 2025-11-07 PASS 54 minutes
- 2025-11-08 PASS an hour
- 2025-11-09 PASS 47 minutes
- 2025-11-10 PASS 46 minutes
- 2025-11-11 PASS 48 minutes
- 2025-11-12 PASS 50 minutes
- 2025-11-13
  - PASS an hour
  - PASS 49 minutes