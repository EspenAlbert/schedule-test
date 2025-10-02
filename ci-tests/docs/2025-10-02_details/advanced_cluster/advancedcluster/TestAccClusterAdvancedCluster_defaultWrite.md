# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-08 09:32](#error-2025-09-08t0932470000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68bea2be0cddbf4f6e49b80c/clusters | qa | 15.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 57 minutes
- 2025-09-04 PASS 48 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 48 minutes
- 2025-09-07 PASS 37 minutes
- 2025-09-08
  - PASS 49 minutes
  - FAIL 15 seconds

### Error 2025-09-08T09:32:47+00:00
```
2025-09-08T09:32:47.9282526Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-09-08T09:33:47.7579591Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-09-08T09:34:02.7593377Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-09-08T09:34:02.7595630Z     pre_check.go:40: Time before creating cluster: 2025-09-08T09:34:02.759084107Z, ProjectID: 68bea2be0cddbf4f6e49b80c, Cluster name: test-acc-tf-c-8983285902831662818
2025-09-08T09:34:03.5939785Z   
2025-09-08T09:34:03.5940445Z     resource_advanced_cluster_test.go:509: Step 1/3 error: Error running apply: exit status 1
2025-09-08T09:34:03.5940878Z         
2025-09-08T09:34:03.5943044Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2be0cddbf4f6e49b80c/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-09-08T09:34:03.5945147Z         
2025-09-08T09:34:03.5945497Z           with mongodbatlas_advanced_cluster.test,
2025-09-08T09:34:03.5946152Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-08T09:34:03.5946755Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-08T09:34:03.5947070Z         
2025-09-08T09:34:03.6415339Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (15.88s)
```

  - PASS 43 minutes
- 2025-09-09 PASS 46 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 35 minutes
- 2025-09-20 PASS 36 minutes
- 2025-09-21 PASS 32 minutes
- 2025-09-22 PASS 33 minutes
- 2025-09-23 PASS 34 minutes
- 2025-09-24 PASS 35 minutes
- 2025-09-25 PASS 38 minutes
- 2025-09-26 PASS 39 minutes
- 2025-09-27 PASS 31 minutes
- 2025-09-28 PASS 29 minutes
- 2025-09-29
  - PASS 48 minutes
  - PASS 26 minutes
- 2025-09-30
  - PASS 31 minutes
  - PASS 27 minutes
  - PASS 33 minutes
  - PASS 29 minutes
  - PASS 26 minutes
- 2025-10-01
  - PASS 33 minutes
  - PASS 29 minutes
  - PASS 27 minutes
  - PASS 26 minutes
  - PASS 36 minutes
  - PASS 31 minutes
  - PASS 39 minutes
  - PASS 28 minutes
- 2025-10-02 PASS 39 minutes