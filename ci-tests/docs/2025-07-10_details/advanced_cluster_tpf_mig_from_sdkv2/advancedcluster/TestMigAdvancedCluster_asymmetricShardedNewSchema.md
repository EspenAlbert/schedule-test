# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_asymmetricShardedNewSchema Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030000000) |  | qa |  | 2.02s
[2025-06-05 00:29](#error-2025-06-05t0029000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 5.03s
[2025-07-06 00:32](#error-2025-07-06t0032160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4127267b5775b683636/limits | qa | flaky_500 | 34.10s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 14 minutes
- 2025-04-13 PASS 12 minutes
- 2025-04-14 PASS 10 minutes
- 2025-04-15 PASS 16 minutes
- 2025-04-16
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-04-17 PASS 13 minutes
- 2025-04-18 PASS 14 minutes
- 2025-04-19 PASS 11 minutes
- 2025-04-20 PASS 13 minutes
- 2025-04-21 PASS 13 minutes
- 2025-04-22 PASS 14 minutes
- 2025-04-23 PASS 12 minutes
- 2025-04-24 PASS 14 minutes
- 2025-04-25 PASS 13 minutes
- 2025-04-26 PASS 15 minutes
- 2025-04-27 PASS 13 minutes
- 2025-04-28 PASS 13 minutes
- 2025-04-29 PASS 12 minutes
- 2025-04-30
  - PASS 18 minutes
  - PASS 12 minutes
- 2025-05-01
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 11 minutes
  - PASS 13 minutes
- 2025-05-02 PASS 14 minutes
- 2025-05-03 PASS 13 minutes
- 2025-05-04 PASS 12 minutes
- 2025-05-05 PASS 11 minutes
- 2025-05-06 PASS 18 minutes
- 2025-05-07
  - PASS 14 minutes
  - PASS 11 minutes
- 2025-05-08 PASS 16 minutes
- 2025-05-09 PASS 13 minutes
- 2025-05-10 PASS 12 minutes
- 2025-05-11

### Error 2025-05-11T00:30:00+00:00
```
2025-05-11T00:30:00.1836620Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-05-11T00:30:00.1837606Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-05-11T00:30:00.1858749Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-05-11T00:30:02.1855612Z   
2025-05-11T00:30:02.1876776Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-05-11T00:30:02.1877869Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:02.1878698Z         
2025-05-11T00:30:02.1879438Z         Error: error creating project: test-acc-tf-p-2845745086029915542
2025-05-11T00:30:02.1880041Z         
2025-05-11T00:30:02.1880657Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:02.1882150Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:02.1883295Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:02.1883865Z         
2025-05-11T00:30:02.1885606Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:02.1886331Z         type
2025-05-11T00:30:02.4007580Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (2.22s)
```

- 2025-05-12 PASS 12 minutes
- 2025-05-13
  - PASS 14 minutes
  - PASS 10 minutes
- 2025-05-14 PASS 15 minutes
- 2025-05-15 PASS 14 minutes
- 2025-05-16 PASS 14 minutes
- 2025-05-17 PASS 14 minutes
- 2025-05-18 PASS 13 minutes
- 2025-05-19 PASS 14 minutes
- 2025-05-20 PASS 15 minutes
- 2025-05-21 PASS 15 minutes
- 2025-05-22 PASS 17 minutes
- 2025-05-23 PASS 14 minutes
- 2025-05-24 PASS 15 minutes
- 2025-05-25 PASS 12 minutes
- 2025-05-26 PASS 14 minutes
- 2025-05-27 PASS 13 minutes
- 2025-05-28
  - PASS 24 minutes
  - PASS 12 minutes
- 2025-05-29 PASS 14 minutes
- 2025-05-30 PASS 38 minutes
- 2025-05-31 PASS 14 minutes
- 2025-06-01
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-06-02
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 12 minutes
- 2025-06-03 PASS 13 minutes
- 2025-06-04 PASS 14 minutes
- 2025-06-05

### Error 2025-06-05T00:29:00+00:00
```
2025-06-05T00:29:00.2462921Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-06-05T00:29:00.2463967Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-06-05T00:29:00.2535592Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-06-05T00:29:05.3318808Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-06-05T00:29:05.3319978Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:05.3321089Z         
2025-06-05T00:29:05.3322001Z         Error: error creating project: test-acc-tf-p-9133533349903162270
2025-06-05T00:29:05.3322653Z         
2025-06-05T00:29:05.3323296Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:29:05.3324776Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:29:05.3326086Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:29:05.3326692Z         
2025-06-05T00:29:05.3327539Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:05.3328674Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:05.3330127Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:05.5127634Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (5.27s)
```

- 2025-06-06 PASS 14 minutes
- 2025-06-07 PASS 15 minutes
- 2025-06-08 PASS 11 minutes
- 2025-06-09 PASS 12 minutes
- 2025-06-10 PASS 28 minutes
- 2025-06-11
  - PASS 13 minutes
  - PASS 11 minutes
- 2025-06-12 PASS 14 minutes
- 2025-06-13 PASS 16 minutes
- 2025-06-14 PASS 14 minutes
- 2025-06-15 PASS 14 minutes
- 2025-06-16 PASS 14 minutes
- 2025-06-17 PASS 17 minutes
- 2025-06-18 PASS 16 minutes
- 2025-06-19 PASS 15 minutes
- 2025-06-20 PASS 14 minutes
- 2025-06-21 PASS 14 minutes
- 2025-06-22 PASS 14 minutes
- 2025-06-23 PASS 13 minutes
- 2025-06-24 PASS 14 minutes
- 2025-06-25 PASS 15 minutes
- 2025-06-26 PASS 13 minutes
- 2025-06-27 PASS 14 minutes
- 2025-06-28 PASS 14 minutes
- 2025-06-29 PASS 14 minutes
- 2025-06-30 PASS 17 minutes
- 2025-07-01
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-07-02
  - PASS 15 minutes
  - PASS 12 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 24 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06

### Error 2025-07-06T00:32:16+00:00
```
2025-07-06T00:32:16.1518557Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-06T00:32:16.1519589Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-06T00:32:16.1562160Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-06T00:32:50.9362278Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-06T00:32:50.9363366Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:32:50.9364132Z         
2025-07-06T00:32:50.9364773Z         Error: error when getting project properties after create
2025-07-06T00:32:50.9365333Z         
2025-07-06T00:32:50.9365887Z           with mongodbatlas_project.cluster_project,
2025-07-06T00:32:50.9366982Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T00:32:50.9368070Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-06T00:32:50.9368593Z         
2025-07-06T00:32:50.9369321Z         error getting project (6869c4127267b5775b683636): error getting project's
2025-07-06T00:32:50.9370660Z         limits (6869c4127267b5775b683636):
2025-07-06T00:32:50.9371655Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4127267b5775b683636/limits
2025-07-06T00:32:50.9372798Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:50.9373783Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:50.9374459Z         BadRequestDetail: 
2025-07-06T00:32:51.1171531Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (34.96s)
```

- 2025-07-07 PASS 14 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 14 minutes
- 2025-07-10 PASS 17 minutes