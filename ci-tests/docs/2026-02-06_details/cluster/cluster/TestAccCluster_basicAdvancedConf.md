# cluster/cluster/TestAccCluster_basicAdvancedConf Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035070000) |  | dev | timeout | 10820.10s
[2026-02-02 00:38](#error-2026-02-02t0038320000) |  | dev | timeout | 10810.09s
[2026-02-03 00:39](#error-2026-02-03t0039180000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters | dev | out_of_capacity | 15.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 23 minutes
- 2026-01-09 PASS 23 minutes
- 2026-01-10 PASS 17 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 22 minutes
- 2026-01-13 PASS 29 minutes
- 2026-01-14 PASS 22 minutes
- 2026-01-15 PASS 25 minutes
- 2026-01-16 PASS 25 minutes
- 2026-01-17 PASS 21 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 21 minutes
- 2026-01-20 PASS 22 minutes
- 2026-01-21 PASS 19 minutes
- 2026-01-22 PASS 20 minutes
- 2026-01-23 PASS 23 minutes
- 2026-01-24 PASS 21 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27 PASS 22 minutes
- 2026-01-28 PASS 22 minutes
- 2026-01-29 PASS 28 minutes
- 2026-01-30 PASS 32 minutes
- 2026-01-31

### Error 2026-01-31T00:35:07+00:00
```
2026-01-31T00:35:07.5183487Z === RUN   TestAccCluster_basicAdvancedConf
2026-01-31T00:35:14.2432057Z === CONT  TestAccCluster_basicAdvancedConf
2026-01-31T00:35:34.2439256Z === NAME  TestAccCluster_basicAdvancedConf
2026-01-31T00:35:34.2441106Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:34.243684454Z, ProjectID: 697d4e39ff188f1e45c42165, Cluster name: test-acc-tf-c-7624927714586255282
2026-01-31T03:35:35.1639916Z === NAME  TestAccCluster_basicAdvancedConf
2026-01-31T03:35:35.1640823Z     resource_cluster_test.go:264: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:35:35.1641798Z         
2026-01-31T03:35:35.1643120Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:35.1644098Z         
2026-01-31T03:35:35.1644582Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:35.1645603Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:35.1646799Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:35.1647317Z         
2026-01-31T03:35:35.2115198Z --- FAIL: TestAccCluster_basicAdvancedConf (10820.97s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:32+00:00
```
2026-02-02T00:38:32.4176105Z === RUN   TestAccCluster_basicAdvancedConf
2026-02-02T00:38:37.8810636Z === CONT  TestAccCluster_basicAdvancedConf
2026-02-02T00:38:47.8818795Z === NAME  TestAccCluster_basicAdvancedConf
2026-02-02T00:38:47.8820319Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:47.881509575Z, ProjectID: 697ff20571768356d7f7d653, Cluster name: test-acc-tf-c-3020113189755498877
2026-02-02T03:38:48.7781973Z === NAME  TestAccCluster_basicAdvancedConf
2026-02-02T03:38:48.7782490Z     resource_cluster_test.go:264: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:38:48.7782941Z         
2026-02-02T03:38:48.7783697Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:48.7784450Z         
2026-02-02T03:38:48.7784767Z           with mongodbatlas_cluster.test,
2026-02-02T03:38:48.7785350Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:38:48.7785971Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:38:48.7786271Z         
2026-02-02T03:38:48.8249828Z --- FAIL: TestAccCluster_basicAdvancedConf (10810.95s)
```

- 2026-02-03

### Error 2026-02-03T00:39:18+00:00
```
2026-02-03T00:39:18.5537088Z === RUN   TestAccCluster_basicAdvancedConf
2026-02-03T00:39:24.5587645Z === CONT  TestAccCluster_basicAdvancedConf
2026-02-03T00:39:39.5612070Z === NAME  TestAccCluster_basicAdvancedConf
2026-02-03T00:39:39.5614721Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:39.560826696Z, ProjectID: 698143b4e3c7fce2317dca6a, Cluster name: test-acc-tf-c-4266288990086003849
2026-02-03T00:39:40.2390182Z    test_name=TestAccCluster_basicAdvancedConf test_terraform_path=/home/runner/work/_temp/c1b3bf8f-1066-43a0-90d3-e6f3bed97ca1/terraform test_working_directory=/tmp/plugintest1544470739 test_step_number=1
2026-02-03T00:39:40.2391915Z     resource_cluster_test.go:264: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:39:40.2392561Z         
2026-02-03T00:39:40.2394918Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:40.2396281Z         
2026-02-03T00:39:40.2396673Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:40.2397507Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:40.2398299Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-03T00:39:40.2398625Z         
2026-02-03T00:39:40.2889757Z --- FAIL: TestAccCluster_basicAdvancedConf (15.73s)
```

- 2026-02-04 PASS 32 minutes
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 21 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 18 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 17 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 19 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 21 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
