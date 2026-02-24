# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035070000) |  | dev | timeout | 10805.03s
[2026-02-02 00:38](#error-2026-02-02t0038340000) |  | dev | timeout | 10802.06s
[2026-02-03 00:39](#error-2026-02-03t0039180000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b6e3c7fce2317df7df/clusters | dev | out_of_capacity | 5.01s
[2026-02-12 00:38](#error-2026-02-12t0038070000) |  | dev | timeout | 11829.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 36 minutes
- 2026-01-27 PASS 40 minutes
- 2026-01-28 PASS 37 minutes
- 2026-01-29 PASS 42 minutes
- 2026-01-30 PASS 48 minutes
- 2026-01-31

### Error 2026-01-31T00:35:07+00:00
```
2026-01-31T00:35:07.5188762Z === RUN   TestAccCluster_MultiRegion
2026-01-31T00:35:14.2507988Z === CONT  TestAccCluster_MultiRegion
2026-01-31T03:35:16.7953730Z === NAME  TestAccCluster_MultiRegion
2026-01-31T03:35:16.7954681Z     resource_cluster_test.go:479: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:35:16.7955392Z         
2026-01-31T03:35:16.7956908Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:16.7957678Z         
2026-01-31T03:35:16.7958101Z           with mongodbatlas_cluster.multi_region,
2026-01-31T03:35:16.7959145Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-01-31T03:35:16.7959796Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-01-31T03:35:16.7960127Z         
2026-01-31T03:35:16.8391421Z --- FAIL: TestAccCluster_MultiRegion (10805.35s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:34+00:00
```
2026-02-02T00:38:34.8397980Z === RUN   TestAccCluster_MultiRegion
2026-02-02T00:38:37.8808955Z === CONT  TestAccCluster_MultiRegion
2026-02-02T03:38:40.4171160Z === NAME  TestAccCluster_MultiRegion
2026-02-02T03:38:40.4171753Z     resource_cluster_test.go:479: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:38:40.4172228Z         
2026-02-02T03:38:40.4173135Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:40.4173722Z         
2026-02-02T03:38:40.4174203Z           with mongodbatlas_cluster.multi_region,
2026-02-02T03:38:40.4174869Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-02-02T03:38:40.4175453Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-02-02T03:38:40.4175873Z         
2026-02-02T03:38:40.4760772Z --- FAIL: TestAccCluster_MultiRegion (10802.60s)
```

- 2026-02-03

### Error 2026-02-03T00:39:18+00:00
```
2026-02-03T00:39:18.5541342Z === RUN   TestAccCluster_MultiRegion
2026-02-03T00:39:24.5584922Z === CONT  TestAccCluster_MultiRegion
2026-02-03T00:39:26.8937924Z === NAME  TestAccCluster_MultiRegion
2026-02-03T00:39:26.8938609Z     resource_cluster_test.go:479: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:39:26.8939237Z         
2026-02-03T00:39:26.8940849Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b6e3c7fce2317df7df/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:26.8941938Z         
2026-02-03T00:39:26.8942378Z           with mongodbatlas_cluster.multi_region,
2026-02-03T00:39:26.8943363Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-02-03T00:39:26.8944114Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-02-03T00:39:26.8944442Z         
2026-02-03T00:39:26.9073750Z    test_step_number=1 test_name=TestAccCluster_basicAzure test_terraform_path=/home/runner/work/_temp/c1b3bf8f-1066-43a0-90d3-e6f3bed97ca1/terraform test_working_directory=/tmp/plugintest2183655009
2026-02-03T00:39:26.9843036Z --- FAIL: TestAccCluster_MultiRegion (5.09s)
```

- 2026-02-04 PASS 42 minutes
- 2026-02-05 PASS 43 minutes
- 2026-02-06 PASS 44 minutes
- 2026-02-07 PASS 42 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 42 minutes
- 2026-02-10 PASS 42 minutes
- 2026-02-11 PASS 41 minutes
- 2026-02-12

### Error 2026-02-12T00:38:07+00:00
```
2026-02-12T00:38:07.8240277Z === RUN   TestAccCluster_MultiRegion
2026-02-12T00:38:14.1160728Z === CONT  TestAccCluster_MultiRegion
2026-02-12T03:52:57.7947586Z === NAME  TestAccCluster_MultiRegion
2026-02-12T03:52:57.7948180Z     resource_cluster_test.go:479: Step 2/2 error: Error running apply: exit status 1
2026-02-12T03:52:57.7948611Z         
2026-02-12T03:52:57.7949954Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8833291637545940445): error updating MongoDB Cluster (test-acc-tf-c-8833291637545940445): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2026-02-12T03:52:57.7951191Z         
2026-02-12T03:52:57.7951558Z           with mongodbatlas_cluster.multi_region,
2026-02-12T03:52:57.7952278Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-02-12T03:52:57.7952932Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-02-12T03:52:57.7953265Z         
2026-02-12T03:55:21.6906183Z --- FAIL: TestAccCluster_MultiRegion (11829.68s)
```

- 2026-02-13 PASS 41 minutes
- 2026-02-14 PASS 43 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 43 minutes
- 2026-02-17 PASS 43 minutes
- 2026-02-18 PASS 45 minutes
- 2026-02-19 PASS 52 minutes
- 2026-02-20 PASS 45 minutes
- 2026-02-21 PASS 44 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 45 minutes
- 2026-02-24 PASS 47 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 37 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 35 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 37 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 40 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 37 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 38 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
