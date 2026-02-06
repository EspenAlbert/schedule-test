# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035140000) |  | dev | timeout | 10802.07s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 10802.06s
[2026-02-03 00:39](#error-2026-02-03t0039240000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b9e3c7fce2317e1081/clusters | dev | out_of_capacity | 2.05s
[2026-02-04 00:35](#error-2026-02-04t0035330000) |  | dev | timeout | 10802.04s
[2026-02-05 00:38](#error-2026-02-05t0038520000) |  | dev | timeout | 10802.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 42 minutes
- 2026-01-09 PASS 50 minutes
- 2026-01-10 PASS 44 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 46 minutes
- 2026-01-13 PASS 53 minutes
- 2026-01-14 PASS 45 minutes
- 2026-01-15 PASS 50 minutes
- 2026-01-16 PASS 52 minutes
- 2026-01-17 PASS 51 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 41 minutes
- 2026-01-20 PASS 45 minutes
- 2026-01-21 PASS 48 minutes
- 2026-01-22 PASS 51 minutes
- 2026-01-23 PASS 52 minutes
- 2026-01-24 PASS 39 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 41 minutes
- 2026-01-27 PASS 48 minutes
- 2026-01-28 PASS 44 minutes
- 2026-01-29 PASS 55 minutes
- 2026-01-30 PASS an hour
- 2026-01-31

### Error 2026-01-31T00:35:14+00:00
```
2026-01-31T00:35:14.2392342Z === RUN   TestAccCluster_RegionsConfig
2026-01-31T00:35:14.2506377Z === CONT  TestAccCluster_RegionsConfig
2026-01-31T03:35:16.9186585Z === NAME  TestAccCluster_RegionsConfig
2026-01-31T03:35:16.9187398Z     resource_cluster_test.go:1183: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:35:16.9188039Z         
2026-01-31T03:35:16.9189067Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:16.9189787Z         
2026-01-31T03:35:16.9190196Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:16.9190861Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:16.9191514Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:16.9191945Z         
2026-01-31T03:35:16.9679031Z --- FAIL: TestAccCluster_RegionsConfig (10802.71s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:37+00:00
```
2026-02-02T00:38:37.8799032Z === RUN   TestAccCluster_RegionsConfig
2026-02-02T00:38:37.8807051Z === CONT  TestAccCluster_RegionsConfig
2026-02-02T03:38:40.4456682Z === NAME  TestAccCluster_RegionsConfig
2026-02-02T03:38:40.4457408Z     resource_cluster_test.go:1183: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:38:40.4457997Z         
2026-02-02T03:38:40.4459550Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:40.4460388Z         
2026-02-02T03:38:40.4460789Z           with mongodbatlas_cluster.test,
2026-02-02T03:38:40.4461656Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:38:40.4462503Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-02-02T03:38:40.4462951Z         
2026-02-02T03:38:40.5074065Z --- FAIL: TestAccCluster_RegionsConfig (10802.63s)
```

- 2026-02-03

### Error 2026-02-03T00:39:24+00:00
```
2026-02-03T00:39:24.5570567Z === RUN   TestAccCluster_RegionsConfig
2026-02-03T00:39:24.5734663Z === CONT  TestAccCluster_RegionsConfig
2026-02-03T00:39:26.6734778Z   
2026-02-03T00:39:26.9398942Z === NAME  TestAccCluster_RegionsConfig
2026-02-03T00:39:26.9399977Z     resource_cluster_test.go:1183: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:39:26.9400691Z         
2026-02-03T00:39:26.9403139Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b9e3c7fce2317e1081/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:26.9405358Z         
2026-02-03T00:39:26.9405951Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:26.9407068Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:26.9408072Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-02-03T00:39:26.9408594Z         
2026-02-03T00:39:27.0192709Z --- FAIL: TestAccCluster_RegionsConfig (2.46s)
```

- 2026-02-04

### Error 2026-02-04T00:35:33+00:00
```
2026-02-04T00:35:33.7188820Z === RUN   TestAccCluster_RegionsConfig
2026-02-04T00:35:33.7196983Z === CONT  TestAccCluster_RegionsConfig
2026-02-04T03:35:36.0296757Z === NAME  TestAccCluster_RegionsConfig
2026-02-04T03:35:36.0297587Z     resource_cluster_test.go:1183: Step 1/3 error: Error running apply: exit status 1
2026-02-04T03:35:36.0298255Z         
2026-02-04T03:35:36.0299271Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-04T03:35:36.0299850Z         
2026-02-04T03:35:36.0300466Z           with mongodbatlas_cluster.test,
2026-02-04T03:35:36.0301095Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-04T03:35:36.0301679Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-02-04T03:35:36.0301985Z         
2026-02-04T03:35:36.0838697Z --- FAIL: TestAccCluster_RegionsConfig (10802.37s)
```

- 2026-02-05

### Error 2026-02-05T00:38:52+00:00
```
2026-02-05T00:38:52.1779815Z === RUN   TestAccCluster_RegionsConfig
2026-02-05T00:38:52.1794770Z === CONT  TestAccCluster_RegionsConfig
2026-02-05T03:38:54.9460925Z === NAME  TestAccCluster_RegionsConfig
2026-02-05T03:38:54.9461754Z     resource_cluster_test.go:1183: Step 1/3 error: Error running apply: exit status 1
2026-02-05T03:38:54.9462420Z         
2026-02-05T03:38:54.9463597Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-05T03:38:54.9464379Z         
2026-02-05T03:38:54.9464670Z           with mongodbatlas_cluster.test,
2026-02-05T03:38:54.9465562Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-05T03:38:54.9466157Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-02-05T03:38:54.9466645Z         
2026-02-05T03:38:54.9933907Z --- FAIL: TestAccCluster_RegionsConfig (10802.81s)
```

- 2026-02-06 PASS an hour

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 43 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 45 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 40 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 39 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 43 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 44 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 38 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
