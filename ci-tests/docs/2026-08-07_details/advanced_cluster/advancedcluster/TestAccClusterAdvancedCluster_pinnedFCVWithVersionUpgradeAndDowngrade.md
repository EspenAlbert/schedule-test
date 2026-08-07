# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058090000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.02s
[2026-07-11 00:55](#error-2026-07-11t0055150000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 4.04s
[2026-07-21 00:53](#error-2026-07-21t0053130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.08s
[2026-07-22 00:44](#error-2026-07-22t0044170000) |  | dev | 2300.05s
[2026-07-23 00:49](#error-2026-07-23t0049410000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:09+00:00
```
2026-07-09T00:58:09.7024013Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-09T00:58:24.4655356Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-09T00:58:26.6339974Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-09T00:58:26.6341140Z     resource_test.go:884: Step 1/8 error: Error running apply: exit status 1
2026-07-09T00:58:26.6342063Z         
2026-07-09T00:58:26.6342855Z         Error: error creating project: test-acc-tf-p-3482497859592925936
2026-07-09T00:58:26.6343545Z         
2026-07-09T00:58:26.6344115Z           with mongodbatlas_project.test,
2026-07-09T00:58:26.6345547Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:58:26.6346761Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:58:26.6347338Z         
2026-07-09T00:58:26.6348215Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-09T00:58:26.6349458Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-09T00:58:26.6350682Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-09T00:58:26.6351864Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-09T00:58:26.6352655Z         BadRequestDetail: 
2026-07-09T00:58:26.6850343Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (2.22s)
```

- 2026-07-10 PASS 46 minutes
- 2026-07-11

### Error 2026-07-11T00:55:15+00:00
```
2026-07-11T00:55:15.5368182Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-11T00:56:44.4091443Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-11T00:56:48.6066710Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-11T00:56:48.6067916Z     resource_test.go:884: Step 1/8 error: Error running apply: exit status 1
2026-07-11T00:56:48.6068629Z         
2026-07-11T00:56:48.6069388Z         Error: error creating project: test-acc-tf-p-7136989175264968315
2026-07-11T00:56:48.6070021Z         
2026-07-11T00:56:48.6070532Z           with mongodbatlas_project.test,
2026-07-11T00:56:48.6071642Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:56:48.6072962Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:56:48.6073514Z         
2026-07-11T00:56:48.6074506Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-11T00:56:48.6075691Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-11T00:56:48.6076871Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-11T00:56:48.6078041Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-11T00:56:48.6078810Z         BadRequestDetail: 
2026-07-11T00:56:48.6831368Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (4.35s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 38 minutes
- 2026-07-14 PASS 35 minutes
- 2026-07-15 PASS 32 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 35 minutes
- 2026-07-18 PASS 32 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:13+00:00
```
2026-07-21T00:53:13.9559320Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-21T00:53:23.4312392Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-21T00:53:26.1925101Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-21T00:53:26.1925799Z     resource_test.go:884: Step 1/8 error: Error running apply: exit status 1
2026-07-21T00:53:26.1926213Z         
2026-07-21T00:53:26.1926768Z         Error: error creating project: test-acc-tf-p-6632069504914662920
2026-07-21T00:53:26.1927293Z         
2026-07-21T00:53:26.1927618Z           with mongodbatlas_project.test,
2026-07-21T00:53:26.1928266Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:26.1928872Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:26.1929190Z         
2026-07-21T00:53:26.1929699Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:53:26.1930663Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:53:26.1931335Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:53:26.1931996Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:53:26.1932446Z         BadRequestDetail: 
2026-07-21T00:53:26.2404286Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (2.81s)
```

- 2026-07-22

### Error 2026-07-22T00:44:17+00:00
```
2026-07-22T00:44:17.6439670Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-22T00:45:57.5510469Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-22T01:08:10.4426226Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-22T01:08:10.4426981Z     resource_test.go:884: Step 5/8 error: Error running post-apply refresh plan: exit status 1
2026-07-22T01:08:10.4427438Z         
2026-07-22T01:08:10.4428051Z         Error: error when getting project properties after create
2026-07-22T01:08:10.4428426Z         
2026-07-22T01:08:10.4428735Z           with mongodbatlas_project.test,
2026-07-22T01:08:10.4429419Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-22T01:08:10.4430110Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-22T01:08:10.4430431Z         
2026-07-22T01:08:10.4430916Z         error getting project (6a6012ca2df9c858fbf60c3a): error getting project's
2026-07-22T01:08:10.4431467Z         teams assigned (6a6012ca2df9c858fbf60c3a):
2026-07-22T01:08:10.4432092Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6012ca2df9c858fbf60c3a/teams
2026-07-22T01:08:10.4432782Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-07-22T01:08:10.4433224Z         BadRequestDetail: 
2026-07-22T01:24:17.8857316Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (2300.54s)
```

- 2026-07-23

### Error 2026-07-23T00:49:41+00:00
```
2026-07-23T00:49:41.0237387Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-23T00:49:49.7213014Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-23T00:49:51.6883796Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-07-23T00:49:51.6885222Z     resource_test.go:884: Step 1/8 error: Error running apply: exit status 1
2026-07-23T00:49:51.6885926Z         
2026-07-23T00:49:51.6886670Z         Error: error creating project: test-acc-tf-p-3822175573569853919
2026-07-23T00:49:51.6887322Z         
2026-07-23T00:49:51.6887879Z           with mongodbatlas_project.test,
2026-07-23T00:49:51.6889037Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:49:51.6890151Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:49:51.6890711Z         
2026-07-23T00:49:51.6891584Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:49:51.6893077Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:49:51.6894280Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:49:51.6895453Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:49:51.6896216Z         BadRequestDetail: 
2026-07-23T00:49:51.7277794Z    test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/57c44fc3-b26f-4c1a-9fbd-d7a3b0d9d62e/terraform
2026-07-23T00:49:51.7697971Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (2.06s)
```

- 2026-07-24 PASS 56 minutes
- 2026-07-25 PASS 31 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 34 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 26 minutes
  - PASS 22 minutes
- 2026-08-01 PASS 23 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 24 minutes
- 2026-08-04 PASS 24 minutes
- 2026-08-05 PASS 23 minutes
- 2026-08-06 PASS 23 minutes
- 2026-08-07 PASS 22 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 33 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 30 minutes
  - PASS 21 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 39 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 32 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 24 minutes
  - PASS 28 minutes
- 2026-07-30 PASS 25 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 23 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
