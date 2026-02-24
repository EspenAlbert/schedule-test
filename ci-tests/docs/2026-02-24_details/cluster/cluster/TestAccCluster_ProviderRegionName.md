# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035100000) |  | dev | timeout | 10802.09s
[2026-02-02 00:38](#error-2026-02-02t0038340000) |  | dev | timeout | 10802.07s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b6e3c7fce2317df7df/clusters | dev | out_of_capacity | 2.07s
[2026-02-13 00:41](#error-2026-02-13t0041070000) |  | dev | timeout | 11970.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 35 minutes
- 2026-01-27 PASS 39 minutes
- 2026-01-28 PASS 48 minutes
- 2026-01-29 PASS 44 minutes
- 2026-01-30 PASS 49 minutes
- 2026-01-31

### Error 2026-01-31T00:35:10+00:00
```
2026-01-31T00:35:10.2856182Z === RUN   TestAccCluster_ProviderRegionName
2026-01-31T00:35:14.2428018Z === CONT  TestAccCluster_ProviderRegionName
2026-01-31T03:35:17.0501257Z === NAME  TestAccCluster_ProviderRegionName
2026-01-31T03:35:17.0501934Z     resource_cluster_test.go:543: Step 2/3 error: Error running apply: exit status 1
2026-01-31T03:35:17.0502536Z         
2026-01-31T03:35:17.0503582Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:17.0504302Z         
2026-01-31T03:35:17.0504745Z           with mongodbatlas_cluster.multi_region,
2026-01-31T03:35:17.0505506Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-01-31T03:35:17.0506384Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-01-31T03:35:17.0506835Z         
2026-01-31T03:35:17.1040953Z --- FAIL: TestAccCluster_ProviderRegionName (10802.86s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:34+00:00
```
2026-02-02T00:38:34.8398816Z === RUN   TestAccCluster_ProviderRegionName
2026-02-02T00:38:37.8808461Z === CONT  TestAccCluster_ProviderRegionName
2026-02-02T03:38:40.5391049Z === NAME  TestAccCluster_ProviderRegionName
2026-02-02T03:38:40.5391897Z     resource_cluster_test.go:543: Step 2/3 error: Error running apply: exit status 1
2026-02-02T03:38:40.5392539Z         
2026-02-02T03:38:40.5393401Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:40.5394193Z         
2026-02-02T03:38:40.5394553Z           with mongodbatlas_cluster.multi_region,
2026-02-02T03:38:40.5395336Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-02-02T03:38:40.5395982Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-02-02T03:38:40.5396291Z         
2026-02-02T03:38:40.5908253Z --- FAIL: TestAccCluster_ProviderRegionName (10802.71s)
```

- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.2145583Z === RUN   TestAccCluster_ProviderRegionName
2026-02-03T00:39:24.5587106Z === CONT  TestAccCluster_ProviderRegionName
2026-02-03T00:39:27.1857035Z === NAME  TestAccCluster_ProviderRegionName
2026-02-03T00:39:27.1858040Z     resource_cluster_test.go:543: Step 2/3 error: Error running apply: exit status 1
2026-02-03T00:39:27.1858830Z         
2026-02-03T00:39:27.1860834Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b6e3c7fce2317df7df/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:27.1862357Z         
2026-02-03T00:39:27.1862713Z           with mongodbatlas_cluster.multi_region,
2026-02-03T00:39:27.1863621Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-02-03T00:39:27.1864274Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-02-03T00:39:27.1864600Z         
2026-02-03T00:39:27.2350307Z --- FAIL: TestAccCluster_ProviderRegionName (2.68s)
```

- 2026-02-04 PASS 42 minutes
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

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 36 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
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
