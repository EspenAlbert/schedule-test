# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 40) FAIL
Success rate: 97.56%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 04:55](#error-2025-10-01t0455000000) |  | dev | 1107.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 29 minutes
- 2025-09-24 PASS 30 minutes
- 2025-09-25 PASS 30 minutes
- 2025-09-26 PASS 28 minutes
- 2025-09-27 PASS 29 minutes
- 2025-09-28 PASS 28 minutes
- 2025-09-29 PASS 31 minutes
- 2025-09-30
  - PASS 35 minutes
  - PASS 29 minutes
  - PASS 28 minutes
- 2025-10-01
  - PASS 27 minutes
  - PASS 29 minutes
  - FAIL 18 minutes

### Error 2025-10-01T04:55:00+00:00
```
2025-10-01T04:55:00.1758935Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-01T04:55:00.1761442Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-01T05:10:23.5867068Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-01T05:10:23.5868118Z     resource_cluster_test.go:1398: Step 4/7 error: Error running apply: exit status 1
2025-10-01T05:10:23.5868660Z         
2025-10-01T05:10:23.5869624Z         Error: error reading Advanced Configuration Option (v20240530) for MongoDB Cluster (test-acc-tf-c-8575190381378573337): undefined response type
2025-10-01T05:10:23.5870229Z         
2025-10-01T05:10:23.5870929Z           with data.mongodbatlas_cluster.test,
2025-10-01T05:10:23.5871523Z           on terraform_plugin_test.tf line 42, in data "mongodbatlas_cluster" "test":
2025-10-01T05:10:23.5872041Z           42: 		data "mongodbatlas_cluster" "test" {
2025-10-01T05:10:23.5872329Z         
2025-10-01T05:13:27.7459123Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1107.57s)
```

  - PASS 27 minutes
  - PASS 27 minutes
  - PASS 28 minutes
  - PASS 29 minutes
  - PASS 29 minutes
- 2025-10-02 PASS 33 minutes
- 2025-10-03 PASS 28 minutes
- 2025-10-04 PASS 45 minutes
- 2025-10-05 PASS 28 minutes
- 2025-10-06 PASS 28 minutes
- 2025-10-07 PASS 31 minutes
- 2025-10-08 PASS 31 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 32 minutes
- 2025-10-11 PASS 29 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 28 minutes
- 2025-10-14 PASS 31 minutes
- 2025-10-15 PASS 30 minutes
- 2025-10-16 PASS 41 minutes
- 2025-10-17 PASS 29 minutes
- 2025-10-18 PASS 29 minutes
- 2025-10-19 PASS 30 minutes
- 2025-10-20
  - PASS 33 minutes
  - PASS 28 minutes
- 2025-10-21 PASS 28 minutes
- 2025-10-22
  - PASS 34 minutes
  - PASS 27 minutes