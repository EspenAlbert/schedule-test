# backup/onlinearchive/TestAccBackupRSOnlineArchive_ErrorMessages Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336540000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters | dev | out_of_capacity | 5.08s
[2026-02-03 00:40](#error-2026-02-03t0040230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143dab2e54ee995914760/clusters | dev | out_of_capacity | 15.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
- 2026-01-09 PASS 19 minutes
- 2026-01-10 PASS 15 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 minutes
- 2026-01-13 PASS 18 minutes
- 2026-01-14 PASS 21 minutes
- 2026-01-15 PASS 19 minutes
- 2026-01-16 PASS 24 minutes
- 2026-01-17 PASS 18 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 minutes
- 2026-01-20 PASS 16 minutes
- 2026-01-21 PASS 21 minutes
- 2026-01-22 PASS 25 minutes
- 2026-01-23 PASS 20 minutes
- 2026-01-24 PASS 15 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27 PASS 18 minutes
- 2026-01-28 PASS 18 minutes
- 2026-01-29 PASS 21 minutes
- 2026-01-30 PASS 26 minutes
- 2026-01-31

### Error 2026-01-31T03:36:54+00:00
```
2026-01-31T03:36:54.4708267Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-01-31T03:36:54.4711454Z === CONT  TestAccBackupRSOnlineArchive_ErrorMessages
2026-01-31T03:36:54.4714443Z === NAME  TestAccBackupRSOnlineArchive_ErrorMessages
2026-01-31T03:36:54.4716077Z     pre_check.go:46: Time before creating cluster: 2026-01-31T03:36:12.328655678Z, ProjectID: 697d78a4cb47a5f1f1137862, Cluster name: test-acc-tf-c-6005129094272730367
2026-01-31T03:36:54.4748185Z    test_name=TestAccBackupRSOnlineArchive_ErrorMessages test_terraform_path=/home/runner/work/_temp/3033667c-f882-4c6a-a87f-335c44830a1c/terraform test_working_directory=/tmp/plugintest426622657 test_step_number=1
2026-01-31T03:36:54.4750457Z     resource_test.go:219: Step 1/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-31T03:36:54.4751366Z         
2026-01-31T03:36:54.4751828Z         Error: Error in create
2026-01-31T03:36:54.4752485Z         
2026-01-31T03:36:54.4753373Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:54.4754734Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:54.4756007Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:54.4756634Z         
2026-01-31T03:36:54.4757409Z         cluster name: test-acc-tf-c-6005129094272730367, API error details:
2026-01-31T03:36:54.4758656Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d78a4cb47a5f1f1137862/clusters
2026-01-31T03:36:54.4759949Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T03:36:54.4761163Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T03:36:54.4762106Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T03:36:54.4763324Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (5.81s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:23+00:00
```
2026-02-03T00:40:23.0934346Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-03T00:40:23.0937242Z === CONT  TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-03T00:40:23.0982755Z === NAME  TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-03T00:40:23.0983641Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:40:11.5887324Z, ProjectID: 698143dab2e54ee995914760, Cluster name: test-acc-tf-c-4248512665349024807
2026-02-03T00:40:23.0997541Z    test_name=TestAccBackupRSOnlineArchive_ErrorMessages
2026-02-03T00:40:23.0998233Z     resource_test.go:219: Step 1/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:40:23.0998754Z         
2026-02-03T00:40:23.0999022Z         Error: Error in create
2026-02-03T00:40:23.0999286Z         
2026-02-03T00:40:23.0999660Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:23.1000403Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:23.1001100Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:23.1001467Z         
2026-02-03T00:40:23.1001892Z         cluster name: test-acc-tf-c-4248512665349024807, API error details:
2026-02-03T00:40:23.1002592Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143dab2e54ee995914760/clusters
2026-02-03T00:40:23.1003300Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:23.1003973Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:23.1004598Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:23.1005002Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (15.82s)
```

- 2026-02-04 PASS 15 minutes
- 2026-02-05 PASS 17 minutes
- 2026-02-06 PASS 18 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 21 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 15 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 14 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 19 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 18 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
