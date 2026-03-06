# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_biConnectorConfig Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037140000) |  | dev | flaky_500 | 1336.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 26 minutes
- 2026-02-06 PASS 23 minutes
- 2026-02-07 PASS 21 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 22 minutes
- 2026-02-11 PASS 21 minutes
- 2026-02-12 PASS 23 minutes
- 2026-02-13 PASS 23 minutes
- 2026-02-14 PASS 23 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 23 minutes
- 2026-02-17 PASS 21 minutes
- 2026-02-18 PASS 25 minutes
- 2026-02-19 PASS 37 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 23 minutes
- 2026-02-24

### Error 2026-02-24T00:37:14+00:00
```
2026-02-24T00:37:14.8708714Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-24T00:40:00.5723455Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-24T00:40:55.5573710Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-24T00:40:55.5575821Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:55.557074903Z, ProjectID: 699cf2b8ae2412ce62124f74, Cluster name: test-acc-tf-c-7915405810147094661
2026-02-24T00:59:13.6884313Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-24T00:59:13.6885138Z     resource_test.go:821: Step 2/3 error: Error running apply: exit status 1
2026-02-24T00:59:13.6885588Z         
2026-02-24T00:59:13.6885868Z         Error: Error in update
2026-02-24T00:59:13.6886244Z         
2026-02-24T00:59:13.6886612Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:59:13.6887523Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:59:13.6888370Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:59:13.6888808Z         
2026-02-24T00:59:13.6889461Z         cluster name: test-acc-tf-c-7915405810147094661, API error details: (503
2026-02-24T00:59:13.6896434Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:02:17.0631375Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (1336.49s)
```

- 2026-02-25 PASS 24 minutes
- 2026-02-26 PASS 34 minutes
- 2026-02-27 PASS 21 minutes
- 2026-02-28 PASS 27 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 21 minutes
  - PASS 21 minutes
- 2026-03-03 PASS 24 minutes
- 2026-03-04 PASS 23 minutes
- 2026-03-05 PASS 40 minutes
- 2026-03-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 24 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 27 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 22 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 27 minutes
- 2026-03-02 PASS 16 minutes
- 2026-03-03 PASS 23 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
