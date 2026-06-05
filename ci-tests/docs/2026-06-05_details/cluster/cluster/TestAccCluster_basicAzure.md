# cluster/cluster/TestAccCluster_basicAzure Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 9)
Success rate: 70.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 00:55](#error-2026-05-07t0055560000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69fbe2d3e0fac50e27d49e7d/clusters | dev | out_of_capacity | 2.07s
[2026-05-07 09:33](#error-2026-05-07t0933310000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69fc5c682f0288ef643ef255/clusters | dev | out_of_capacity | 2.04s
[2026-05-08 00:54](#error-2026-05-08t0054340000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69fd3447085055a4bc251862/clusters | dev | out_of_capacity | 2.03s
[2026-05-09 00:55](#error-2026-05-09t0055490000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69fe85dea336bb08c47a941c/clusters | dev | out_of_capacity | 2.10s
[2026-05-11 00:58](#error-2026-05-11t0058070000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a01299d9b4177680380dbee/clusters | dev | out_of_capacity | 2.03s
[2026-05-12 00:53](#error-2026-05-12t0053090000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a0279f1373288b9dd0ea86d/clusters | dev | out_of_capacity | 2.05s
[2026-05-13 00:57](#error-2026-05-13t0057530000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a03cc8fc2214ad0d1989fcb/clusters | dev | out_of_capacity | 3.08s
[2026-06-01 01:08](#error-2026-06-01t0108440000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a1cdb99adbc612d01a20378/clusters | dev | out_of_capacity | 2.04s
[2026-06-05 01:05](#error-2026-06-05t0105270000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a2220d642e1e504cd7a7f69/clusters | dev | out_of_capacity | 2.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL 2 seconds

### Error 2026-05-07T00:55:56+00:00
```
2026-05-07T00:55:56.1062495Z === RUN   TestAccCluster_basicAzure
2026-05-07T00:56:36.0300526Z === CONT  TestAccCluster_basicAzure
2026-05-07T00:56:38.6082161Z === NAME  TestAccCluster_basicAzure
2026-05-07T00:56:38.6083035Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-05-07T00:56:38.6083764Z         
2026-05-07T00:56:38.6086297Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69fbe2d3e0fac50e27d49e7d/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-07T00:56:38.6088338Z         
2026-05-07T00:56:38.6088905Z           with mongodbatlas_cluster.basic_azure,
2026-05-07T00:56:38.6090075Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-05-07T00:56:38.6091155Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-05-07T00:56:38.6091719Z         
2026-05-07T00:56:38.6705892Z --- FAIL: TestAccCluster_basicAzure (2.69s)
```

  - FAIL 2 seconds

### Error 2026-05-07T09:33:31+00:00
```
2026-05-07T09:33:31.1580977Z === RUN   TestAccCluster_basicAzure
2026-05-07T09:33:37.2734049Z === CONT  TestAccCluster_basicAzure
2026-05-07T09:33:39.6448233Z === NAME  TestAccCluster_basicAzure
2026-05-07T09:33:39.6449060Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-05-07T09:33:39.6449660Z         
2026-05-07T09:33:39.6451269Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69fc5c682f0288ef643ef255/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-07T09:33:39.6452862Z         
2026-05-07T09:33:39.6453295Z           with mongodbatlas_cluster.basic_azure,
2026-05-07T09:33:39.6454021Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-05-07T09:33:39.6454798Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-05-07T09:33:39.6455210Z         
2026-05-07T09:33:39.6938222Z    test_terraform_path=/home/runner/work/_temp/b2416dfc-551f-4917-bcf5-40b5300057e3/terraform test_name=TestAccCluster_basicGCP test_working_directory=/tmp/plugintest1928092638
2026-05-07T09:33:39.7046936Z --- FAIL: TestAccCluster_basicAzure (2.42s)
```

- 2026-05-08

### Error 2026-05-08T00:54:34+00:00
```
2026-05-08T00:54:34.4029178Z === RUN   TestAccCluster_basicAzure
2026-05-08T00:54:40.5542147Z === CONT  TestAccCluster_basicAzure
2026-05-08T00:54:42.7827069Z === NAME  TestAccCluster_basicAzure
2026-05-08T00:54:42.7828444Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-05-08T00:54:42.7829208Z         
2026-05-08T00:54:42.7833080Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69fd3447085055a4bc251862/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-08T00:54:42.7834127Z         
2026-05-08T00:54:42.7834469Z           with mongodbatlas_cluster.basic_azure,
2026-05-08T00:54:42.7835134Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-05-08T00:54:42.7835764Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-05-08T00:54:42.7836098Z         
2026-05-08T00:54:42.8276034Z --- FAIL: TestAccCluster_basicAzure (2.27s)
```

- 2026-05-09

### Error 2026-05-09T00:55:49+00:00
```
2026-05-09T00:55:49.8357071Z === RUN   TestAccCluster_basicAzure
2026-05-09T01:05:11.5557941Z === CONT  TestAccCluster_basicAzure
2026-05-09T01:05:14.4578022Z === NAME  TestAccCluster_basicAzure
2026-05-09T01:05:14.4578632Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-05-09T01:05:14.4579378Z         
2026-05-09T01:05:14.4580717Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69fe85dea336bb08c47a941c/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-09T01:05:14.4581695Z         
2026-05-09T01:05:14.4582384Z           with mongodbatlas_cluster.basic_azure,
2026-05-09T01:05:14.4583050Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-05-09T01:05:14.4583642Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-05-09T01:05:14.4584013Z         
2026-05-09T01:05:14.5124096Z --- FAIL: TestAccCluster_basicAzure (2.99s)
```

- 2026-05-10: MISSING
- 2026-05-11

### Error 2026-05-11T00:58:07+00:00
```
2026-05-11T00:58:07.8232076Z === RUN   TestAccCluster_basicAzure
2026-05-11T00:58:11.6134315Z === CONT  TestAccCluster_basicAzure
2026-05-11T00:58:13.8056919Z === NAME  TestAccCluster_basicAzure
2026-05-11T00:58:13.8058103Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-05-11T00:58:13.8058772Z         
2026-05-11T00:58:13.8060383Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a01299d9b4177680380dbee/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-11T00:58:13.8061695Z         
2026-05-11T00:58:13.8062039Z           with mongodbatlas_cluster.basic_azure,
2026-05-11T00:58:13.8062724Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-05-11T00:58:13.8063358Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-05-11T00:58:13.8063689Z         
2026-05-11T00:58:13.8523481Z --- FAIL: TestAccCluster_basicAzure (2.26s)
```

- 2026-05-12

### Error 2026-05-12T00:53:09+00:00
```
2026-05-12T00:53:09.1658701Z === RUN   TestAccCluster_basicAzure
2026-05-12T00:53:14.2004013Z === CONT  TestAccCluster_basicAzure
2026-05-12T00:53:16.6356548Z === NAME  TestAccCluster_basicAzure
2026-05-12T00:53:16.6357206Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-05-12T00:53:16.6357686Z         
2026-05-12T00:53:16.6359406Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a0279f1373288b9dd0ea86d/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-12T00:53:16.6360567Z         
2026-05-12T00:53:16.6360949Z           with mongodbatlas_cluster.basic_azure,
2026-05-12T00:53:16.6361753Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-05-12T00:53:16.6362769Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-05-12T00:53:16.6363129Z         
2026-05-12T00:53:16.6852191Z --- FAIL: TestAccCluster_basicAzure (2.50s)
```

- 2026-05-13

### Error 2026-05-13T00:57:53+00:00
```
2026-05-13T00:57:53.7727768Z === RUN   TestAccCluster_basicAzure
2026-05-13T00:58:00.7769304Z === CONT  TestAccCluster_basicAzure
2026-05-13T00:58:04.4058528Z === NAME  TestAccCluster_basicAzure
2026-05-13T00:58:04.4059191Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-05-13T00:58:04.4059655Z         
2026-05-13T00:58:04.4061195Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a03cc8fc2214ad0d1989fcb/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-13T00:58:04.4062345Z         
2026-05-13T00:58:04.4062679Z           with mongodbatlas_cluster.basic_azure,
2026-05-13T00:58:04.4063449Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-05-13T00:58:04.4064322Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-05-13T00:58:04.4064755Z         
2026-05-13T00:58:04.4577788Z --- FAIL: TestAccCluster_basicAzure (3.77s)
```

- 2026-05-14 PASS 44 minutes
- 2026-05-15 PASS 23 minutes
- 2026-05-16 PASS 17 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 33 minutes
- 2026-05-19 PASS 17 minutes
- 2026-05-20 PASS 18 minutes
- 2026-05-21 PASS 25 minutes
- 2026-05-22 PASS 30 minutes
- 2026-05-23 PASS 23 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 23 minutes
- 2026-05-26 PASS 20 minutes
- 2026-05-27 PASS 54 minutes
- 2026-05-28 PASS 30 minutes
- 2026-05-29 PASS 23 minutes
- 2026-05-30 PASS 18 minutes
- 2026-05-31: MISSING
- 2026-06-01

### Error 2026-06-01T01:08:44+00:00
```
2026-06-01T01:08:44.1644257Z === RUN   TestAccCluster_basicAzure
2026-06-01T01:08:49.1744614Z === CONT  TestAccCluster_basicAzure
2026-06-01T01:08:51.5339135Z === NAME  TestAccCluster_basicAzure
2026-06-01T01:08:51.5340034Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-06-01T01:08:51.5340818Z         
2026-06-01T01:08:51.5342305Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a1cdb99adbc612d01a20378/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-06-01T01:08:51.5343522Z         
2026-06-01T01:08:51.5344118Z           with mongodbatlas_cluster.basic_azure,
2026-06-01T01:08:51.5345074Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-06-01T01:08:51.5345777Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-06-01T01:08:51.5346164Z         
2026-06-01T01:08:51.5911875Z --- FAIL: TestAccCluster_basicAzure (2.42s)
```

- 2026-06-02 PASS 17 minutes
- 2026-06-03 PASS 32 minutes
- 2026-06-04 PASS 54 minutes
- 2026-06-05

### Error 2026-06-05T01:05:27+00:00
```
2026-06-05T01:05:27.7242257Z === RUN   TestAccCluster_basicAzure
2026-06-05T01:05:32.7310688Z === CONT  TestAccCluster_basicAzure
2026-06-05T01:05:35.0666369Z === NAME  TestAccCluster_basicAzure
2026-06-05T01:05:35.0667102Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-06-05T01:05:35.0667854Z         
2026-06-05T01:05:35.0669508Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a2220d642e1e504cd7a7f69/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-06-05T01:05:35.0671339Z         
2026-06-05T01:05:35.0671966Z           with mongodbatlas_cluster.basic_azure,
2026-06-05T01:05:35.0673242Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-06-05T01:05:35.0674461Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-06-05T01:05:35.0675057Z         
2026-06-05T01:05:35.1228637Z --- FAIL: TestAccCluster_basicAzure (2.39s)
```


## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 24 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 21 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 22 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 18 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
