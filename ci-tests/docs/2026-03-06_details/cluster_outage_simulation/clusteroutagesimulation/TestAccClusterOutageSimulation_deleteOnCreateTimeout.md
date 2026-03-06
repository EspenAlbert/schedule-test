# cluster_outage_simulation/clusteroutagesimulation/TestAccClusterOutageSimulation_deleteOnCreateTimeout Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036490000) |  | dev | flaky_500 | 964.08s
[2026-02-28 00:34](#error-2026-02-28t0034420000) |  | dev | flaky_500 | 1999.01s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS an hour
- 2026-02-06 PASS an hour
- 2026-02-07 PASS an hour
- 2026-02-08: MISSING
- 2026-02-09 PASS an hour
- 2026-02-10 PASS an hour
- 2026-02-11 PASS 59 minutes
- 2026-02-12 PASS an hour
- 2026-02-13 PASS an hour
- 2026-02-14 PASS an hour
- 2026-02-15: MISSING
- 2026-02-16 PASS an hour
- 2026-02-17 PASS an hour
- 2026-02-18 PASS an hour
- 2026-02-19 PASS an hour
- 2026-02-20 PASS an hour
- 2026-02-21 PASS an hour
- 2026-02-22: MISSING
- 2026-02-23 PASS an hour
- 2026-02-24

### Error 2026-02-24T00:36:49+00:00
```
2026-02-24T00:36:49.4276014Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-24T00:36:49.4279464Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-24T00:37:04.4389438Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-24T00:37:04.4390903Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:04.438604124Z, ProjectID: 699cf29eae2412ce62113b94, Cluster name: test-acc-tf-c-4908505059476037273
2026-02-24T00:50:47.8492081Z    test_name=TestAccClusterOutageSimulation_deleteOnCreateTimeout test_terraform_path=/home/runner/work/_temp/fa56c540-a252-4faf-b590-7b7340e653ce/terraform test_working_directory=/tmp/plugintest2188451522 test_step_number=1
2026-02-24T00:50:47.8494720Z     resource_test.go:168: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-24T00:50:47.8495581Z         
2026-02-24T00:50:47.8497932Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (699cf29eae2412ce62113b94), Cluster (test-acc-tf-c-4908505059476037273): (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:50:47.8499612Z         
2026-02-24T00:50:47.8500361Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2026-02-24T00:50:47.8502101Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2026-02-24T00:50:47.8503528Z           38: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2026-02-24T00:50:47.8504197Z         
2026-02-24T00:52:54.1815170Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (964.75s)
```

- 2026-02-25 PASS an hour
- 2026-02-26 PASS an hour
- 2026-02-27 PASS an hour
- 2026-02-28

### Error 2026-02-28T00:34:42+00:00
```
2026-02-28T00:34:42.7440262Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-28T00:34:42.7444642Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-28T00:34:52.7518212Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-28T00:34:52.7520662Z     pre_check.go:46: Time before creating cluster: 2026-02-28T00:34:52.750747374Z, ProjectID: 69a238209581f233415000a8, Cluster name: test-acc-tf-c-7300897714308970721
2026-02-28T01:08:01.8737661Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-02-28T01:08:01.8738389Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-28T01:08:01.8738887Z         
2026-02-28T01:08:01.8739136Z         Error: Error in delete
2026-02-28T01:08:01.8739375Z         
2026-02-28T01:08:01.8739803Z         cluster name: test-acc-tf-c-7300897714308970721, API error details:
2026-02-28T01:08:01.8740676Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a238209581f233415000a8/clusters/test-acc-tf-c-7300897714308970721
2026-02-28T01:08:01.8741331Z         DELETE: HTTP 400 Bad Request (Error code:
2026-02-28T01:08:01.8742050Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2026-02-28T01:08:01.8742726Z         Detail: Cannot terminate cluster test-acc-tf-c-7300897714308970721 in project
2026-02-28T01:08:01.8743410Z         test-acc-tf-p-1711375943268261484 because it is undergoing a regional outage
2026-02-28T01:08:01.8744059Z         simulation. End regional outage simulation and try again. Reason: Bad
2026-02-28T01:08:01.8744582Z         Request. Params: [test-acc-tf-c-7300897714308970721
2026-02-28T01:08:01.8745056Z         test-acc-tf-p-1711375943268261484], BadRequestDetail: 
2026-02-28T01:08:01.8745515Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (1999.13s)
```

- 2026-03-01: MISSING
- 2026-03-02
  - PASS an hour
  - PASS an hour
- 2026-03-03 PASS an hour
- 2026-03-04 PASS 59 minutes
- 2026-03-05 PASS an hour
- 2026-03-06 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-03-03 09:31](#error-2026-03-03t0931040000) |  | qa | 1859.05s

### Timeline
- 2026-02-04 PASS 58 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 57 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS an hour
- 2026-02-16: MISSING
- 2026-02-17 PASS 59 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS an hour
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS an hour
- 2026-03-02: MISSING
- 2026-03-03

### Error 2026-03-03T09:31:04+00:00
```
2026-03-03T09:31:04.8614495Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-03-03T09:31:04.8621480Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-03-03T09:31:29.8785344Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-03-03T09:31:29.8789581Z     pre_check.go:46: Time before creating cluster: 2026-03-03T09:31:29.878215389Z, ProjectID: 69a6aa57aa1a482df74dcd93, Cluster name: test-acc-tf-c-5828018632613000170
2026-03-03T10:02:03.9652596Z   diagnostic_summary=
2026-03-03T10:02:03.9659055Z    diagnostic_detail="" tf_req_id=7d754387-ee68-b50a-c2d3-7042a2d50d11 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-03-03T10:02:04.3663135Z   
2026-03-03T10:02:04.3663727Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2026-03-03T10:02:04.3664262Z         
2026-03-03T10:02:04.3664533Z         Error: Error in delete
2026-03-03T10:02:04.3664808Z         
2026-03-03T10:02:04.3665260Z         cluster name: test-acc-tf-c-5828018632613000170, API error details:
2026-03-03T10:02:04.3666212Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a6aa57aa1a482df74dcd93/clusters/test-acc-tf-c-5828018632613000170
2026-03-03T10:02:04.3666939Z         DELETE: HTTP 400 Bad Request (Error code:
2026-03-03T10:02:04.3667531Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2026-03-03T10:02:04.3668207Z         Detail: Cannot terminate cluster test-acc-tf-c-5828018632613000170 in project
2026-03-03T10:02:04.3668895Z         test-acc-tf-p-2841105421460976518 because it is undergoing a regional outage
2026-03-03T10:02:04.3669556Z         simulation. End regional outage simulation and try again. Reason: Bad
2026-03-03T10:02:04.3670121Z         Request. Params: [test-acc-tf-c-5828018632613000170
2026-03-03T10:02:04.3670633Z         test-acc-tf-p-2841105421460976518], BadRequestDetail: 
2026-03-03T10:02:04.3671114Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (1859.50s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
