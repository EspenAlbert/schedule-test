# cluster/cluster/TestMigCluster_basicAWS_simple Test Details
# Found 21 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-15 00:28](#error-2025-10-15t0028190000) |  | dev | flaky_client | 397.00s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15

### Error 2025-10-15T00:28:19+00:00
```
2025-10-15T00:28:19.4294952Z === RUN   TestMigCluster_basicAWS_simple
2025-10-15T00:28:27.1075886Z === CONT  TestMigCluster_basicAWS_simple
2025-10-15T00:28:32.0905797Z === NAME  TestMigCluster_basicAWS_simple
2025-10-15T00:28:32.0907258Z     pre_check.go:36: Time before creating cluster: 2025-10-15T00:28:32.090299832Z, ProjectID: 68eeeaa3be088e40ea2d0447, Cluster name: test-acc-tf-c-1206618603608311405
2025-10-15T00:35:01.7545520Z === NAME  TestMigCluster_basicAWS_simple
2025-10-15T00:35:01.7546206Z     resource_cluster_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-10-15T00:35:01.7546643Z         
2025-10-15T00:35:01.7548280Z         Error: error creating MongoDB Cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68eeeaa3be088e40ea2d0447/clusters/test-acc-tf-c-1206618603608311405": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-10-15T00:35:01.7549335Z         
2025-10-15T00:35:01.7549919Z           with mongodbatlas_cluster.test,
2025-10-15T00:35:01.7550792Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-10-15T00:35:01.7551407Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-10-15T00:35:01.7551783Z         
2025-10-15T00:35:01.9686379Z --- FAIL: TestMigCluster_basicAWS_simple (397.02s)
```

- 2025-10-16 PASS 16 minutes
- 2025-10-17 PASS 12 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 11 minutes
- 2025-10-20 PASS 35 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 22 minutes
  - PASS 11 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS 11 minutes
- 2025-10-25: MISSING
- 2025-10-26 PASS 11 minutes
- 2025-10-27 PASS an hour
- 2025-10-28: MISSING
- 2025-10-29 PASS 16 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 15 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 11 minutes
- 2025-11-03 PASS 15 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 12 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 11 minutes
- 2025-11-10 PASS 10 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 15 minutes
- 2025-11-13 PASS 10 minutes