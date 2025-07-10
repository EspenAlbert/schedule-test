# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 5)
Success rate: 95.69%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 2.01s
[2025-05-21 01:51](#error-2025-05-21t0151360000) |  | dev |  | 874.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 5.10s
[2025-06-22 03:04](#error-2025-06-22t0304120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6857560baf7a0954e84b0993/limits | qa | flaky_500 | 884.01s
[2025-07-06 01:46](#error-2025-07-06t0146530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c9c8690ae45e168bfa5c/limits | qa | flaky_500 | 734.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 20 minutes
- 2025-04-13 PASS 23 minutes
- 2025-04-14 PASS 19 minutes
- 2025-04-15 PASS 19 minutes
- 2025-04-16
  - PASS 19 minutes
  - PASS 25 minutes
- 2025-04-17 PASS 22 minutes
- 2025-04-18 PASS 18 minutes
- 2025-04-19 PASS 21 minutes
- 2025-04-20 PASS 21 minutes
- 2025-04-21 PASS 25 minutes
- 2025-04-22 PASS 22 minutes
- 2025-04-23 PASS 24 minutes
- 2025-04-24 PASS 20 minutes
- 2025-04-25 PASS 22 minutes
- 2025-04-26 PASS 22 minutes
- 2025-04-27 PASS 24 minutes
- 2025-04-28 PASS 21 minutes
- 2025-04-29 PASS 22 minutes
- 2025-04-30 PASS 18 minutes
- 2025-05-01
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 22 minutes
  - PASS 19 minutes
  - PASS 21 minutes
  - PASS 21 minutes
- 2025-05-02 PASS 25 minutes
- 2025-05-03 PASS 20 minutes
- 2025-05-04 PASS 20 minutes
- 2025-05-05 PASS 22 minutes
- 2025-05-06 PASS 22 minutes
- 2025-05-07 PASS 19 minutes
- 2025-05-08 PASS 22 minutes
- 2025-05-09 PASS 22 minutes
- 2025-05-10 PASS 21 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.8092580Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-11T00:30:01.8183149Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-11T00:30:01.8296804Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-11T00:30:01.8297486Z     resource_advanced_cluster_test.go:1156: Step 1/8 error: Error running apply: exit status 1
2025-05-11T00:30:01.8297901Z         
2025-05-11T00:30:01.8298296Z         Error: error creating project: test-acc-tf-p-44797160904959640
2025-05-11T00:30:01.8298627Z         
2025-05-11T00:30:01.8298920Z           with mongodbatlas_project.test,
2025-05-11T00:30:01.8299500Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:01.8300028Z           12: resource "mongodbatlas_project" "test" {
2025-05-11T00:30:01.8300306Z         
2025-05-11T00:30:01.8300757Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:01.8301137Z         type
2025-05-11T00:30:01.8340520Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (2.08s)
```

- 2025-05-12 PASS 21 minutes
- 2025-05-13
  - PASS 22 minutes
  - PASS 19 minutes
- 2025-05-14 PASS 23 minutes
- 2025-05-15 PASS 22 minutes
- 2025-05-16 PASS 19 minutes
- 2025-05-17 PASS 18 minutes
- 2025-05-18 PASS 21 minutes
- 2025-05-19 PASS 24 minutes
- 2025-05-20 PASS 18 minutes
- 2025-05-21
  - FAIL 14 minutes

### Error 2025-05-21T01:51:36+00:00
```
2025-05-21T01:51:36.5130421Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-21T01:51:36.5151957Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-21T01:51:36.5238750Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-21T01:51:36.5239576Z     resource_advanced_cluster_test.go:1156: Step 3/8, expected an error with pattern, no match on: Error running apply: exit status 1
2025-05-21T01:51:36.5240117Z         
2025-05-21T01:51:36.5240384Z         Error: Error in FCV pinning
2025-05-21T01:51:36.5240644Z         
2025-05-21T01:51:36.5240967Z           with mongodbatlas_advanced_cluster.test,
2025-05-21T01:51:36.5241612Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-21T01:51:36.5242203Z           17: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-21T01:51:36.5242507Z         
2025-05-21T01:51:36.5242965Z         cluster name test-acc-tf-c-729721510154694. API error detail expiration_date
2025-05-21T01:51:36.5243414Z         format is incorrect: invalid
2025-05-21T01:51:36.5269098Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (874.00s)
```

  - PASS 18 minutes
- 2025-05-22 PASS 20 minutes
- 2025-05-23 PASS 20 minutes
- 2025-05-24 PASS 18 minutes
- 2025-05-25 PASS 21 minutes
- 2025-05-26 PASS 20 minutes
- 2025-05-27 PASS 16 minutes
- 2025-05-28
  - PASS 19 minutes
  - PASS 21 minutes
  - PASS 20 minutes
- 2025-05-29 PASS 25 minutes
- 2025-05-30
  - PASS an hour
  - PASS 17 minutes
- 2025-05-31 PASS 21 minutes
- 2025-06-01
  - PASS 20 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 19 minutes
- 2025-06-02
  - PASS 18 minutes
  - PASS 22 minutes
  - PASS 25 minutes
  - PASS 20 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04 PASS 21 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5907011Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-05T00:35:38.5951811Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-05T00:35:38.6286353Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-05T00:35:38.6287608Z     resource_advanced_cluster_test.go:1159: Step 1/8 error: Error running apply: exit status 1
2025-06-05T00:35:38.6288535Z         
2025-06-05T00:35:38.6289288Z         Error: error creating project: test-acc-tf-p-1075317136810687744
2025-06-05T00:35:38.6289909Z         
2025-06-05T00:35:38.6290438Z           with mongodbatlas_project.test,
2025-06-05T00:35:38.6291521Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:35:38.6292493Z           12: resource "mongodbatlas_project" "test" {
2025-06-05T00:35:38.6293007Z         
2025-06-05T00:35:38.6293846Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:38.6294987Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:38.6296021Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6308347Z    test_step_number=1 test_name=TestAccMockableAdvancedCluster_symmetricShardedOldSchema test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform test_working_directory=/tmp/plugintest1057000842
2025-06-05T00:35:38.6389295Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (5.99s)
```

- 2025-06-06 PASS 24 minutes
- 2025-06-07 PASS 19 minutes
- 2025-06-08 PASS 20 minutes
- 2025-06-09 PASS 23 minutes
- 2025-06-10 PASS 39 minutes
- 2025-06-11
  - PASS 18 minutes
  - PASS 23 minutes
- 2025-06-12 PASS 19 minutes
- 2025-06-13 PASS 24 minutes
- 2025-06-14 PASS 38 minutes
- 2025-06-15 PASS 21 minutes
- 2025-06-16 PASS 22 minutes
- 2025-06-17 PASS 20 minutes
- 2025-06-18
  - PASS 24 minutes
  - PASS 21 minutes
- 2025-06-19 PASS 47 minutes
- 2025-06-20 PASS 19 minutes
- 2025-06-21 PASS 20 minutes
- 2025-06-22

### Error 2025-06-22T03:04:12+00:00
```
2025-06-22T03:04:12.6126117Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T03:04:12.6149319Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T03:04:12.6322724Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T03:04:12.6324052Z     resource_advanced_cluster_test.go:1159: Step 1/8 error: Error running post-apply refresh plan: exit status 1
2025-06-22T03:04:12.6324855Z         
2025-06-22T03:04:12.6325497Z         Error: error when getting project properties after create
2025-06-22T03:04:12.6326046Z         
2025-06-22T03:04:12.6326711Z           with mongodbatlas_project.test,
2025-06-22T03:04:12.6327749Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T03:04:12.6328673Z           12: resource "mongodbatlas_project" "test" {
2025-06-22T03:04:12.6329148Z         
2025-06-22T03:04:12.6329924Z         error getting project (6857560baf7a0954e84b0993): error getting project's
2025-06-22T03:04:12.6330696Z         limits (6857560baf7a0954e84b0993):
2025-06-22T03:04:12.6331679Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6857560baf7a0954e84b0993/limits
2025-06-22T03:04:12.6332837Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T03:04:12.6333834Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T03:04:12.6334484Z         BadRequestDetail: 
2025-06-22T03:04:12.6349031Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (884.09s)
```

- 2025-06-23 PASS 20 minutes
- 2025-06-24 PASS 30 minutes
- 2025-06-25 PASS 17 minutes
- 2025-06-26
  - PASS 22 minutes
  - PASS 17 minutes
- 2025-06-27 PASS 20 minutes
- 2025-06-28 PASS 18 minutes
- 2025-06-29 PASS 25 minutes
- 2025-06-30 PASS 20 minutes
- 2025-07-01
  - PASS 19 minutes
  - PASS 20 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 22 minutes
- 2025-07-02 PASS 19 minutes
- 2025-07-03 PASS 18 minutes
- 2025-07-04 PASS 20 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06

### Error 2025-07-06T01:46:53+00:00
```
2025-07-06T01:46:53.5884637Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T01:46:53.5908161Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T01:46:53.6000606Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T01:46:53.6001344Z     resource_advanced_cluster_test.go:1159: Step 1/8 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:46:53.6001811Z         
2025-07-06T01:46:53.6002181Z         Error: error when getting project properties after create
2025-07-06T01:46:53.6002501Z         
2025-07-06T01:46:53.6002794Z           with mongodbatlas_project.test,
2025-07-06T01:46:53.6003370Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T01:46:53.6003886Z           12: resource "mongodbatlas_project" "test" {
2025-07-06T01:46:53.6004160Z         
2025-07-06T01:46:53.6004589Z         error getting project (6869c9c8690ae45e168bfa5c): error getting project's
2025-07-06T01:46:53.6005029Z         limits (6869c9c8690ae45e168bfa5c):
2025-07-06T01:46:53.6005724Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c9c8690ae45e168bfa5c/limits
2025-07-06T01:46:53.6006382Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:46:53.6006938Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:46:53.6007422Z         BadRequestDetail: 
2025-07-06T01:46:53.6074967Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (734.02s)
```

- 2025-07-07 PASS 19 minutes
- 2025-07-08 PASS 21 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10 PASS 21 minutes