# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 00:41](#error-2026-02-13t0041070000) |  | dev | timeout | 11970.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 43 minutes
- 2026-02-06 PASS 43 minutes
- 2026-02-07 PASS 42 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 42 minutes
- 2026-02-10 PASS 43 minutes
- 2026-02-11 PASS 40 minutes
- 2026-02-12 PASS 43 minutes
- 2026-02-13

### Error 2026-02-13T00:41:07+00:00
```
2026-02-13T00:41:07.9286428Z === RUN   TestAccCluster_ProviderRegionName
2026-02-13T00:41:11.9409447Z === CONT  TestAccCluster_ProviderRegionName
2026-02-13T03:58:18.2092983Z === NAME  TestAccCluster_ProviderRegionName
2026-02-13T03:58:18.2096221Z     resource_cluster_test.go:543: Step 3/3 error: Error running apply: exit status 1
2026-02-13T03:58:18.2096837Z         
2026-02-13T03:58:18.2098934Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7280825599658941275): error updating MongoDB Cluster (test-acc-tf-c-7280825599658941275): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-02-13T03:58:18.2100138Z         
2026-02-13T03:58:18.2100914Z           with mongodbatlas_cluster.multi_region,
2026-02-13T03:58:18.2101661Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-02-13T03:58:18.2102321Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-02-13T03:58:18.2102650Z         
2026-02-13T04:00:42.4270431Z --- FAIL: TestAccCluster_ProviderRegionName (11970.49s)
```

- 2026-02-14 PASS 44 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 42 minutes
- 2026-02-17 PASS 43 minutes
- 2026-02-18 PASS 46 minutes
- 2026-02-19 PASS an hour
- 2026-02-20 PASS 44 minutes
- 2026-02-21 PASS 42 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 43 minutes
- 2026-02-24 PASS 46 minutes
- 2026-02-25 PASS 43 minutes
- 2026-02-26 PASS 47 minutes
- 2026-02-27 PASS 42 minutes
- 2026-02-28 PASS 43 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 42 minutes
- 2026-03-03 PASS 46 minutes
- 2026-03-04 PASS 42 minutes
- 2026-03-05 PASS 50 minutes
- 2026-03-06 PASS 51 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 34 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 36 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 39 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 36 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 38 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 40 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 36 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
