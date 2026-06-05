# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:02](#error-2026-05-28t0102460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 54 minutes
- 2026-05-08 PASS 37 minutes
- 2026-05-09 PASS 32 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 34 minutes
- 2026-05-12 PASS 31 minutes
- 2026-05-13 PASS 37 minutes
- 2026-05-14 PASS 55 minutes
- 2026-05-15 PASS 33 minutes
- 2026-05-16 PASS 25 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 50 minutes
- 2026-05-19 PASS 27 minutes
- 2026-05-20 PASS 34 minutes
- 2026-05-21 PASS 26 minutes
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 38 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 40 minutes
- 2026-05-26 PASS 28 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:02:46+00:00
```
2026-05-28T01:02:46.7788249Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-05-28T01:02:47.2018323Z     shared_resource.go:160: 
2026-05-28T01:02:47.2019655Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:47.2021476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:02:47.2023255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:02:47.2025020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:02:47.2027119Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:02:47.2029216Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:922
2026-05-28T01:02:47.2030044Z         	Error:      	Received unexpected error:
2026-05-28T01:02:47.2032904Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:47.2034444Z         	Test:       	TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-05-28T01:02:47.2036997Z         	Messages:   	Project creation failed: test-acc-tf-p-6892279699590252251, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:47.2038682Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (0.43s)
```

- 2026-05-29 PASS 41 minutes
- 2026-05-30 PASS 22 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 53 minutes
- 2026-06-02 PASS 22 minutes
- 2026-06-03 PASS 48 minutes
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 38 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-24 01:02](#error-2026-05-24t0102190000) |  | qa | timeout | 11812.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 31 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 29 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24

### Error 2026-05-24T01:02:19+00:00
```
2026-05-24T01:02:19.4253541Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-05-24T01:02:22.8119990Z     resource_test.go:988: Adding variable groupId=6a124e1b36680253fd4d9cbe
2026-05-24T01:02:22.8121339Z     resource_test.go:988: Adding variable clusterName=test-acc-tf-c-8236764737449540879
2026-05-24T01:05:34.1585051Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-05-24T01:19:42.1045741Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-05-24T01:19:42.1047538Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-9021076803201021596
2026-05-24T01:19:42.4207365Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-7639577628667363495
2026-05-24T01:19:42.7287974Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-4964829489960830019
2026-05-24T01:19:43.5281753Z     http_mocker_config_capture.go:112: Adding variable groupId to groupId2=6a124e0936680253fd4d73c5
2026-05-24T01:19:43.5283874Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-5622047820877760691
2026-05-24T04:19:50.0124239Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-05-24T04:19:50.0124855Z     resource_test.go:988: Step 2/4 error: Error running apply: exit status 1
2026-05-24T04:19:50.0125514Z         
2026-05-24T04:19:50.0125775Z         Error: Error in update
2026-05-24T04:19:50.0126031Z         
2026-05-24T04:19:50.0126422Z           with mongodbatlas_advanced_cluster.test,
2026-05-24T04:19:50.0127210Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-24T04:19:50.0128359Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-24T04:19:50.0128705Z         
2026-05-24T04:19:50.0129163Z         cluster=test-acc-tf-c-8236764737449540879 didn't reach desired state: IDLE,
2026-05-24T04:19:50.0129809Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-05-24T04:19:50.0130248Z         'UPDATING', timeout: 3h0m0s)
2026-05-24T04:22:22.8566307Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (11812.09s)
```

- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 25 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
