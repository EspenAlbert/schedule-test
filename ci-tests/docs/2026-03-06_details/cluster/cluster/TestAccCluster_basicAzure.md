# cluster/cluster/TestAccCluster_basicAzure Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 00:38](#error-2026-02-05t0038470000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6983e695304923ebd184d8b1/clusters | dev | out_of_capacity | 2.04s
[2026-02-19 00:39](#error-2026-02-19t0039270000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69965bbd99696b9761bbe2d6/clusters | dev | out_of_capacity | 2.06s
[2026-02-24 00:36](#error-2026-02-24t0036550000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/699cf2a5ae2412ce62117913/clusters | dev | out_of_capacity | 2.03s
[2026-02-26 00:36](#error-2026-02-26t0036260000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/699f95876ef93d0b6c18068e/clusters | dev | out_of_capacity | 3.04s
[2026-03-04 00:37](#error-2026-03-04t0037430000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69a77ed4a0aca1fefeeab7b7/clusters | dev | out_of_capacity | 2.04s

### Timeline
- 2026-02-04: MISSING
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
- 2026-02-07 PASS 17 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 17 minutes
- 2026-02-10 PASS 17 minutes
- 2026-02-11 PASS 19 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 20 minutes
- 2026-02-14 PASS 16 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 18 minutes
- 2026-02-17 PASS 34 minutes
- 2026-02-18 PASS 23 minutes
- 2026-02-19

### Error 2026-02-19T00:39:27+00:00
```
2026-02-19T00:39:27.7700348Z === RUN   TestAccCluster_basicAzure
2026-02-19T00:39:32.9700038Z === CONT  TestAccCluster_basicAzure
2026-02-19T00:39:35.5444039Z === NAME  TestAccCluster_basicAzure
2026-02-19T00:39:35.5444781Z     resource_cluster_test.go:336: Step 1/2 error: Error running apply: exit status 1
2026-02-19T00:39:35.5445260Z         
2026-02-19T00:39:35.5447208Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69965bbd99696b9761bbe2d6/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-19T00:39:35.5448972Z         
2026-02-19T00:39:35.5449715Z           with mongodbatlas_cluster.basic_azure,
2026-02-19T00:39:35.5450897Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-02-19T00:39:35.5452021Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-02-19T00:39:35.5452550Z         
2026-02-19T00:39:35.5884876Z --- FAIL: TestAccCluster_basicAzure (2.62s)
```

- 2026-02-20 PASS 21 minutes
- 2026-02-21 PASS 16 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 17 minutes
- 2026-02-24

### Error 2026-02-24T00:36:55+00:00
```
2026-02-24T00:36:55.7980600Z === RUN   TestAccCluster_basicAzure
2026-02-24T00:37:02.7202015Z === CONT  TestAccCluster_basicAzure
2026-02-24T00:37:04.9747828Z === NAME  TestAccCluster_basicAzure
2026-02-24T00:37:04.9748530Z     resource_cluster_test.go:336: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:37:04.9748956Z         
2026-02-24T00:37:04.9750497Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/699cf2a5ae2412ce62117913/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-24T00:37:04.9751737Z         
2026-02-24T00:37:04.9752067Z           with mongodbatlas_cluster.basic_azure,
2026-02-24T00:37:04.9752719Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-02-24T00:37:04.9753323Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-02-24T00:37:04.9753634Z         
2026-02-24T00:37:05.0232511Z --- FAIL: TestAccCluster_basicAzure (2.30s)
```

- 2026-02-25 PASS 21 minutes
- 2026-02-26

### Error 2026-02-26T00:36:26+00:00
```
2026-02-26T00:36:26.7854760Z === RUN   TestAccCluster_basicAzure
2026-02-26T00:36:34.5424190Z === CONT  TestAccCluster_basicAzure
2026-02-26T00:36:37.8885168Z === NAME  TestAccCluster_basicAzure
2026-02-26T00:36:37.8886059Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-02-26T00:36:37.8886782Z         
2026-02-26T00:36:37.8889408Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/699f95876ef93d0b6c18068e/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-26T00:36:37.8891171Z         
2026-02-26T00:36:37.8891732Z           with mongodbatlas_cluster.basic_azure,
2026-02-26T00:36:37.8892916Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-02-26T00:36:37.8894027Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-02-26T00:36:37.8894587Z         
2026-02-26T00:36:37.9362833Z --- FAIL: TestAccCluster_basicAzure (3.39s)
```

- 2026-02-27 PASS 18 minutes
- 2026-02-28 PASS 20 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 18 minutes
- 2026-03-03 PASS 26 minutes
- 2026-03-04

### Error 2026-03-04T00:37:43+00:00
```
2026-03-04T00:37:43.1486281Z === RUN   TestAccCluster_basicAzure
2026-03-04T00:37:49.8243691Z === CONT  TestAccCluster_basicAzure
2026-03-04T00:37:52.1256330Z === NAME  TestAccCluster_basicAzure
2026-03-04T00:37:52.1257439Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-03-04T00:37:52.1258104Z         
2026-03-04T00:37:52.1259734Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69a77ed4a0aca1fefeeab7b7/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-03-04T00:37:52.1260728Z         
2026-03-04T00:37:52.1261203Z           with mongodbatlas_cluster.basic_azure,
2026-03-04T00:37:52.1262045Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-03-04T00:37:52.1262828Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-03-04T00:37:52.1263161Z         
2026-03-04T00:37:52.1705721Z --- FAIL: TestAccCluster_basicAzure (2.35s)
```

- 2026-03-05 PASS 24 minutes
- 2026-03-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 14 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 30 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 24 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 20 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 14 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
