# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07 PASS 31 seconds
- 2025-08-08 PASS 3 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 5 seconds
- 2025-08-11 PASS 8 seconds
- 2025-08-12
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-08-13 PASS 8 seconds
- 2025-08-14 PASS 8 seconds
- 2025-08-15: MISSING
- 2025-08-16 PASS 8 seconds
- 2025-08-17 PASS 24 seconds
- 2025-08-18 PASS 8 seconds
- 2025-08-19 PASS 7 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 15 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22: MISSING
- 2025-08-23 PASS 4 seconds
- 2025-08-24 PASS 7 seconds
- 2025-08-25 PASS 9 seconds
- 2025-08-26 PASS 3 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28 PASS 8 seconds
- 2025-08-29: MISSING
- 2025-08-30 PASS 8 seconds
- 2025-08-31 PASS 8 seconds
- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:30:42+00:00
```
2025-09-01T00:30:42.5264317Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-09-01T00:30:44.5144909Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-09-01T00:30:46.4456958Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-09-01T00:30:46.4458346Z     resource_advanced_cluster_test.go:723: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-01T00:30:46.4459333Z         
2025-09-01T00:30:46.4460109Z         Error: error creating project: test-acc-tf-p-6345848273901597745
2025-09-01T00:30:46.4460753Z         
2025-09-01T00:30:46.4461379Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:46.4462625Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:46.4463759Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:46.4464330Z         
2025-09-01T00:30:46.4495473Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:46.4496767Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:46.4497897Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:46.4499233Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:46.4499953Z         BadRequestDetail: 
2025-09-01T00:30:46.5303571Z   
2025-09-01T00:30:46.5983321Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (2.09s)
```

  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds