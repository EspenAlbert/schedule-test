# cluster/cluster/TestAccCluster_basicAzure Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-29 00:36](#error-2026-01-29t0036200000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/697aab80f4a2a16d1a6870c7/clusters | dev | out_of_capacity | 2.03s
[2026-02-03 00:39](#error-2026-02-03t0039180000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters | dev | out_of_capacity | 2.04s
[2026-02-05 00:38](#error-2026-02-05t0038470000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6983e695304923ebd184d8b1/clusters | dev | out_of_capacity | 2.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09 PASS 20 minutes
- 2026-01-10 PASS 15 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 20 minutes
- 2026-01-13 PASS 24 minutes
- 2026-01-14 PASS 21 minutes
- 2026-01-15 PASS 21 minutes
- 2026-01-16 PASS 19 minutes
- 2026-01-17 PASS 15 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 16 minutes
- 2026-01-20 PASS 18 minutes
- 2026-01-21 PASS 19 minutes
- 2026-01-22 PASS 21 minutes
- 2026-01-23 PASS 22 minutes
- 2026-01-24 PASS 35 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 13 minutes
- 2026-01-27 PASS 20 minutes
- 2026-01-28 PASS 17 minutes
- 2026-01-29

### Error 2026-01-29T00:36:20+00:00
```
2026-01-29T00:36:20.4421233Z === RUN   TestAccCluster_basicAzure
2026-01-29T00:36:25.6950818Z === CONT  TestAccCluster_basicAzure
2026-01-29T00:36:27.9686981Z === NAME  TestAccCluster_basicAzure
2026-01-29T00:36:27.9687698Z     resource_cluster_test.go:336: Step 1/2 error: Error running apply: exit status 1
2026-01-29T00:36:27.9688243Z         
2026-01-29T00:36:27.9689948Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/697aab80f4a2a16d1a6870c7/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-01-29T00:36:27.9691193Z         
2026-01-29T00:36:27.9691531Z           with mongodbatlas_cluster.basic_azure,
2026-01-29T00:36:27.9692200Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-01-29T00:36:27.9692825Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-01-29T00:36:27.9693156Z         
2026-01-29T00:36:28.0144235Z --- FAIL: TestAccCluster_basicAzure (2.33s)
```

- 2026-01-30 PASS 25 minutes
- 2026-01-31 PASS 14 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 15 minutes
- 2026-02-03

### Error 2026-02-03T00:39:18+00:00
```
2026-02-03T00:39:18.5538186Z === RUN   TestAccCluster_basicAzure
2026-02-03T00:39:24.5583812Z === CONT  TestAccCluster_basicAzure
2026-02-03T00:39:26.9075162Z === NAME  TestAccCluster_basicAzure
2026-02-03T00:39:26.9076095Z     resource_cluster_test.go:336: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:39:26.9076810Z         
2026-02-03T00:39:26.9079301Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:26.9081079Z         
2026-02-03T00:39:26.9081666Z           with mongodbatlas_cluster.basic_azure,
2026-02-03T00:39:26.9082896Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-02-03T00:39:26.9084307Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-02-03T00:39:26.9084929Z         
2026-02-03T00:39:26.9187514Z    test_step_number=1 test_name=TestAccCluster_WithBiConnectorGCP
2026-02-03T00:39:27.0029096Z --- FAIL: TestAccCluster_basicAzure (2.45s)
```

- 2026-02-04 PASS 29 minutes
- 2026-02-05

### Error 2026-02-05T00:38:47+00:00
```
2026-02-05T00:38:47.3992037Z === RUN   TestAccCluster_basicAzure
2026-02-05T00:38:52.1790419Z === CONT  TestAccCluster_basicAzure
2026-02-05T00:38:54.4785827Z === NAME  TestAccCluster_basicAzure
2026-02-05T00:38:54.4786467Z     resource_cluster_test.go:336: Step 1/2 error: Error running apply: exit status 1
2026-02-05T00:38:54.4786913Z         
2026-02-05T00:38:54.4788715Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6983e695304923ebd184d8b1/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-05T00:38:54.4789757Z         
2026-02-05T00:38:54.4790265Z           with mongodbatlas_cluster.basic_azure,
2026-02-05T00:38:54.4791083Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-02-05T00:38:54.4791700Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-02-05T00:38:54.4792190Z         
2026-02-05T00:38:54.5298690Z --- FAIL: TestAccCluster_basicAzure (2.35s)
```

- 2026-02-06 PASS 17 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 16 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 20 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 16 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 15 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 20 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 17 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
