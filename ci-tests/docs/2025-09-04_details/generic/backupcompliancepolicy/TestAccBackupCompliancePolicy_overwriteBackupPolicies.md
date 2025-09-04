# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_overwriteBackupPolicies Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-06 00:31](#error-2025-08-06t0031520000) | ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/6892a232eb5d09519715c685/clusters | dev |  | 5.02s
[2025-08-07 00:34](#error-2025-08-07t0034090000) | API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 29.00s
[2025-08-08 00:31](#error-2025-08-08t0031510000) | API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters | dev | real_test_failure | 4.03s
[2025-08-24 00:32](#error-2025-08-24t0032390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d299bbb8c4ee1f8183b/limits | qa | flaky_500 | 34.04s
[2025-09-01 03:30](#error-2025-09-01t0330180000) |  | dev | timeout | 10803.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T00:31:52+00:00
```
2025-08-06T00:31:52.1880616Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-06T00:31:52.1887342Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-06T00:31:52.1913730Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-06T00:31:52.1915332Z     resource_backup_compliance_policy_test.go:82: Step 1/2 error: Error running apply: exit status 1
2025-08-06T00:31:52.1916247Z         
2025-08-06T00:31:52.1919297Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6892a232eb5d09519715c685/clusters POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED") Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-08-06T00:31:52.1921405Z         
2025-08-06T00:31:52.1922165Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-08-06T00:31:52.1923582Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-06T00:31:52.1925262Z           26: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-06T00:31:52.1925988Z         
2025-08-06T00:31:52.1926665Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (5.22s)
```

- 2025-08-07

### Error 2025-08-07T00:34:09+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-08-07T00:34:09.913000+00:00-TestAccBackupCompliancePolicy_overwriteBackupPolicies',confidence=1.0,ts_when='28 days ago')
API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters
```
2025-08-07T00:34:09.9136428Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-07T00:34:09.9145809Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-07T00:34:09.9172924Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-07T00:34:09.9174357Z     resource_backup_compliance_policy_test.go:82: Step 1/2 error: Error running apply: exit status 1
2025-08-07T00:34:09.9175283Z         
2025-08-07T00:34:09.9178351Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6893f3d43ccac962b567cbfe/clusters POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED") Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-08-07T00:34:09.9180452Z         
2025-08-07T00:34:09.9181475Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-08-07T00:34:09.9182909Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-07T00:34:09.9184470Z           26: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-07T00:34:09.9185205Z         
2025-08-07T00:34:09.9185897Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (29.02s)
```

- 2025-08-08

### Error 2025-08-08T00:31:51+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-08-08T00:31:51.635000+00:00-TestAccBackupCompliancePolicy_overwriteBackupPolicies',confidence=1.0,ts_when='27 days ago')
API Error ATLAS_CLUSTER_VERSION_DEPRECATED /api/atlas/v2/groups/{groupId}/clusters
```
2025-08-08T00:31:51.0635099Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-08T00:31:51.0641629Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-08T00:31:51.0669788Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-08T00:31:51.0670953Z     resource_backup_compliance_policy_test.go:82: Step 1/2 error: Error running apply: exit status 1
2025-08-08T00:31:51.0671945Z         
2025-08-08T00:31:51.0673741Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6895453113642126f9014f5b/clusters POST: HTTP 400 Bad Request (Error code: "ATLAS_CLUSTER_VERSION_DEPRECATED") Detail: MongoDB version is deprecated in Atlas. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-08-08T00:31:51.0674932Z         
2025-08-08T00:31:51.0675368Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-08-08T00:31:51.0676181Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-08T00:31:51.0677110Z           26: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-08T00:31:51.0677527Z         
2025-08-08T00:31:51.0677924Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (4.32s)
```

- 2025-08-09 PASS 18 minutes
- 2025-08-10 PASS 24 minutes
- 2025-08-11 PASS 53 minutes
- 2025-08-12 PASS 19 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 17 minutes
- 2025-08-15 PASS 13 minutes
- 2025-08-16 PASS 41 minutes
- 2025-08-17 PASS 30 minutes
- 2025-08-18 PASS 15 minutes
- 2025-08-19 PASS 16 minutes
- 2025-08-20
  - PASS 15 minutes
  - PASS 19 minutes
- 2025-08-21 PASS 13 minutes
- 2025-08-22 PASS 14 minutes
- 2025-08-23 PASS 20 minutes
- 2025-08-24

### Error 2025-08-24T00:32:39+00:00
```
2025-08-24T00:32:39.4464672Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-24T00:32:39.4469889Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-24T00:32:39.4556515Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-08-24T00:32:39.4557251Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:32:39.4557766Z         
2025-08-24T00:32:39.4558216Z         Error: error when getting project properties after create
2025-08-24T00:32:39.4558803Z         
2025-08-24T00:32:39.4559201Z           with mongodbatlas_project.test,
2025-08-24T00:32:39.4559904Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:39.4560519Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:39.4560886Z         
2025-08-24T00:32:39.4561409Z         error getting project (68aa5d299bbb8c4ee1f8183b): error getting project's
2025-08-24T00:32:39.4561945Z         limits (68aa5d299bbb8c4ee1f8183b):
2025-08-24T00:32:39.4562597Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d299bbb8c4ee1f8183b/limits
2025-08-24T00:32:39.4563359Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:39.4564023Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:39.4564491Z         BadRequestDetail: 
2025-08-24T00:32:39.4564954Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (34.40s)
```

- 2025-08-25 PASS 16 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 23 minutes
- 2025-08-28 PASS 18 minutes
- 2025-08-29 PASS 28 minutes
- 2025-08-30 PASS 17 minutes
- 2025-08-31 PASS 18 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:30:18+00:00
```
2025-09-01T03:30:18.2098855Z === RUN   TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-01T03:30:18.2105525Z === CONT  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-01T03:30:18.2309293Z === NAME  TestAccBackupCompliancePolicy_overwriteBackupPolicies
2025-09-01T03:30:18.2310036Z     resource_backup_compliance_policy_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:30:18.2310548Z         
2025-09-01T03:30:18.2311364Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:30:18.2311970Z         
2025-09-01T03:30:18.2312406Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:30:18.2313371Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:30:18.2314117Z           26: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:30:18.2314652Z         
2025-09-01T03:30:18.2326599Z    test_name=TestAccBackupCompliancePolicy_overwriteBackupPolicies test_working_directory=/tmp/plugintest381262159 test_step_number=1
2025-09-01T03:30:18.2327574Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T03:30:18.2328602Z         
2025-09-01T03:30:18.2329307Z         Error: error when destroying resource
2025-09-01T03:30:18.2329911Z         
2025-09-01T03:30:18.2330343Z         error deleting project (68b4e91746ef690a79d6cd1f):
2025-09-01T03:30:18.2331043Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b4e91746ef690a79d6cd1f
2025-09-01T03:30:18.2331619Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-01T03:30:18.2332253Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-09-01T03:30:18.2333172Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-09-01T03:30:18.2333699Z         Params: [], BadRequestDetail: 
2025-09-01T03:30:18.2334200Z --- FAIL: TestAccBackupCompliancePolicy_overwriteBackupPolicies (10803.94s)
```

  - PASS an hour
  - PASS an hour
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-09-02 PASS 18 minutes
- 2025-09-03 PASS 35 minutes
- 2025-09-04 PASS 16 minutes