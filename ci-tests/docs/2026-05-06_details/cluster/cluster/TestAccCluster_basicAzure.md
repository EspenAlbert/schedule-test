# cluster/cluster/TestAccCluster_basicAzure Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 24) FAIL(x 11)
Success rate: 68.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-08 00:45](#error-2026-04-08t0045050000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69d5a50e74e39a6641495096/clusters | dev | out_of_capacity | 2.04s
[2026-04-09 00:38](#error-2026-04-09t0038100000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69d6f4efbcd76cc4105e52c3/clusters | dev | out_of_capacity | 1.09s
[2026-04-11 00:42](#error-2026-04-11t0042330000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69d998f6a916b4e11798e73b/clusters | dev | out_of_capacity | 4.03s
[2026-04-24 00:51](#error-2026-04-24t0051130000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69eabe7dd0fc1bc3247858a9/clusters | dev | out_of_capacity | 2.04s
[2026-04-25 00:46](#error-2026-04-25t0046230000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69ec0edcfe9ffef66c7ae609/clusters | dev | out_of_capacity | 2.05s
[2026-04-27 00:51](#error-2026-04-27t0051280000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69eeb30d3f007945e39fbaeb/clusters | dev | out_of_capacity | 2.04s
[2026-04-28 00:54](#error-2026-04-28t0054100000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69f0051f9f1c1f1daca3b3b8/clusters | dev | out_of_capacity | 2.06s
[2026-04-30 01:01](#error-2026-04-30t0101030000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69f2a9ad422bb69a2c34b4cb/clusters | dev | out_of_capacity | 2.05s
[2026-05-04 00:54](#error-2026-05-04t0054540000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69f7ee5c7df0831a727d2a3f/clusters | dev | out_of_capacity | 2.04s
[2026-05-05 00:51](#error-2026-05-05t0051190000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69f93f024c08027a6ce22a3e/clusters | dev | out_of_capacity | 2.02s
[2026-05-06 00:50](#error-2026-05-06t0050510000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69fa906960f26af82a9b1ef0/clusters | dev | out_of_capacity | 2.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 40 minutes
- 2026-04-08

### Error 2026-04-08T00:45:05+00:00
```
2026-04-08T00:45:05.3156870Z === RUN   TestAccCluster_basicAzure
2026-04-08T00:45:08.9407953Z === CONT  TestAccCluster_basicAzure
2026-04-08T00:45:11.2347706Z === NAME  TestAccCluster_basicAzure
2026-04-08T00:45:11.2348920Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-04-08T00:45:11.2349895Z         
2026-04-08T00:45:11.2352379Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69d5a50e74e39a6641495096/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-08T00:45:11.2353611Z         
2026-04-08T00:45:11.2353979Z           with mongodbatlas_cluster.basic_azure,
2026-04-08T00:45:11.2354640Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-04-08T00:45:11.2355262Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-04-08T00:45:11.2355588Z         
2026-04-08T00:45:11.2837906Z --- FAIL: TestAccCluster_basicAzure (2.35s)
```

- 2026-04-09

### Error 2026-04-09T00:38:10+00:00
```
2026-04-09T00:38:10.8711024Z === RUN   TestAccCluster_basicAzure
2026-04-09T00:42:48.9993391Z === CONT  TestAccCluster_basicAzure
2026-04-09T00:42:50.8399993Z === NAME  TestAccCluster_basicAzure
2026-04-09T00:42:50.8400933Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:42:50.8401657Z         
2026-04-09T00:42:50.8403512Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69d6f4efbcd76cc4105e52c3/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-09T00:42:50.8404892Z         
2026-04-09T00:42:50.8405424Z           with mongodbatlas_cluster.basic_azure,
2026-04-09T00:42:50.8406319Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-04-09T00:42:50.8406961Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-04-09T00:42:50.8407289Z         
2026-04-09T00:42:50.8845852Z --- FAIL: TestAccCluster_basicAzure (1.89s)
```

- 2026-04-10 PASS 21 minutes
- 2026-04-11

### Error 2026-04-11T00:42:33+00:00
```
2026-04-11T00:42:33.7885373Z === RUN   TestAccCluster_basicAzure
2026-04-11T00:43:40.1816116Z === CONT  TestAccCluster_basicAzure
2026-04-11T00:43:44.4547000Z === NAME  TestAccCluster_basicAzure
2026-04-11T00:43:44.4547759Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:43:44.4548295Z         
2026-04-11T00:43:44.4549881Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69d998f6a916b4e11798e73b/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-11T00:43:44.4551001Z         
2026-04-11T00:43:44.4551344Z           with mongodbatlas_cluster.basic_azure,
2026-04-11T00:43:44.4572805Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-04-11T00:43:44.4574170Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-04-11T00:43:44.4574634Z         
2026-04-11T00:43:44.5031080Z --- FAIL: TestAccCluster_basicAzure (4.32s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 26 minutes
- 2026-04-14 PASS 16 minutes
- 2026-04-15 PASS 19 minutes
- 2026-04-16 PASS 15 minutes
- 2026-04-17 PASS 18 minutes
- 2026-04-18 PASS 26 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 17 minutes
- 2026-04-21 PASS 24 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 29 minutes
- 2026-04-24

### Error 2026-04-24T00:51:13+00:00
```
2026-04-24T00:51:13.6128420Z === RUN   TestAccCluster_basicAzure
2026-04-24T00:51:18.7574356Z === CONT  TestAccCluster_basicAzure
2026-04-24T00:51:21.0649382Z === NAME  TestAccCluster_basicAzure
2026-04-24T00:51:21.0650174Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-04-24T00:51:21.0650691Z         
2026-04-24T00:51:21.0652405Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69eabe7dd0fc1bc3247858a9/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-24T00:51:21.0653556Z         
2026-04-24T00:51:21.0653910Z           with mongodbatlas_cluster.basic_azure,
2026-04-24T00:51:21.0654628Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-04-24T00:51:21.0655295Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-04-24T00:51:21.0655643Z         
2026-04-24T00:51:21.1115511Z --- FAIL: TestAccCluster_basicAzure (2.36s)
```

- 2026-04-25

### Error 2026-04-25T00:46:23+00:00
```
2026-04-25T00:46:23.4773195Z === RUN   TestAccCluster_basicAzure
2026-04-25T00:46:30.5620627Z === CONT  TestAccCluster_basicAzure
2026-04-25T00:46:33.0490064Z === NAME  TestAccCluster_basicAzure
2026-04-25T00:46:33.0490762Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-04-25T00:46:33.0491309Z         
2026-04-25T00:46:33.0492921Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69ec0edcfe9ffef66c7ae609/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-25T00:46:33.0494014Z         
2026-04-25T00:46:33.0494467Z           with mongodbatlas_cluster.basic_azure,
2026-04-25T00:46:33.0495375Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-04-25T00:46:33.0496123Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-04-25T00:46:33.0496442Z         
2026-04-25T00:46:33.0956729Z --- FAIL: TestAccCluster_basicAzure (2.54s)
```

- 2026-04-26: MISSING
- 2026-04-27

### Error 2026-04-27T00:51:28+00:00
```
2026-04-27T00:51:28.2512984Z === RUN   TestAccCluster_basicAzure
2026-04-27T00:51:32.6457397Z === CONT  TestAccCluster_basicAzure
2026-04-27T00:51:35.0229900Z === NAME  TestAccCluster_basicAzure
2026-04-27T00:51:35.0230802Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-04-27T00:51:35.0231307Z         
2026-04-27T00:51:35.0232854Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69eeb30d3f007945e39fbaeb/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-27T00:51:35.0234252Z         
2026-04-27T00:51:35.0234594Z           with mongodbatlas_cluster.basic_azure,
2026-04-27T00:51:35.0235269Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-04-27T00:51:35.0235896Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-04-27T00:51:35.0236554Z         
2026-04-27T00:51:35.0752856Z --- FAIL: TestAccCluster_basicAzure (2.43s)
```

- 2026-04-28

### Error 2026-04-28T00:54:10+00:00
```
2026-04-28T00:54:10.8920855Z === RUN   TestAccCluster_basicAzure
2026-04-28T00:55:23.9173472Z === CONT  TestAccCluster_basicAzure
2026-04-28T00:55:26.4160982Z === NAME  TestAccCluster_basicAzure
2026-04-28T00:55:26.4161532Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-04-28T00:55:26.4162755Z         
2026-04-28T00:55:26.4164378Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69f0051f9f1c1f1daca3b3b8/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-28T00:55:26.4165353Z         
2026-04-28T00:55:26.4165675Z           with mongodbatlas_cluster.basic_azure,
2026-04-28T00:55:26.4166321Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-04-28T00:55:26.4166930Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-04-28T00:55:26.4167243Z         
2026-04-28T00:55:26.4596565Z --- FAIL: TestAccCluster_basicAzure (2.59s)
```

- 2026-04-29 PASS 19 minutes
- 2026-04-30

### Error 2026-04-30T01:01:03+00:00
```
2026-04-30T01:01:03.1997944Z === RUN   TestAccCluster_basicAzure
2026-04-30T01:01:11.0631208Z === CONT  TestAccCluster_basicAzure
2026-04-30T01:01:13.4614656Z   
2026-04-30T01:01:13.4615308Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-04-30T01:01:13.4615866Z         
2026-04-30T01:01:13.4619075Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69f2a9ad422bb69a2c34b4cb/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-30T01:01:13.4620545Z         
2026-04-30T01:01:13.4621255Z           with mongodbatlas_cluster.basic_azure,
2026-04-30T01:01:13.4622443Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-04-30T01:01:13.4623805Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-04-30T01:01:13.4624374Z         
2026-04-30T01:01:13.5139421Z --- FAIL: TestAccCluster_basicAzure (2.49s)
```

- 2026-05-01 PASS 17 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04

### Error 2026-05-04T00:54:54+00:00
```
2026-05-04T00:54:54.7508135Z === RUN   TestAccCluster_basicAzure
2026-05-04T00:55:01.6756751Z === CONT  TestAccCluster_basicAzure
2026-05-04T00:55:04.0295365Z === NAME  TestAccCluster_basicAzure
2026-05-04T00:55:04.0296180Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-05-04T00:55:04.0296823Z         
2026-05-04T00:55:04.0298785Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69f7ee5c7df0831a727d2a3f/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-04T00:55:04.0299851Z         
2026-05-04T00:55:04.0300201Z           with mongodbatlas_cluster.basic_azure,
2026-05-04T00:55:04.0301056Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-05-04T00:55:04.0301721Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-05-04T00:55:04.0302048Z         
2026-05-04T00:55:04.0752705Z --- FAIL: TestAccCluster_basicAzure (2.40s)
```

- 2026-05-05

### Error 2026-05-05T00:51:19+00:00
```
2026-05-05T00:51:19.4216557Z === RUN   TestAccCluster_basicAzure
2026-05-05T00:55:44.3659979Z === CONT  TestAccCluster_basicAzure
2026-05-05T00:55:46.5409703Z === NAME  TestAccCluster_basicAzure
2026-05-05T00:55:46.5410370Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-05-05T00:55:46.5410818Z         
2026-05-05T00:55:46.5412673Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69f93f024c08027a6ce22a3e/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-05T00:55:46.5413770Z         
2026-05-05T00:55:46.5414114Z           with mongodbatlas_cluster.basic_azure,
2026-05-05T00:55:46.5414869Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-05-05T00:55:46.5415583Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-05-05T00:55:46.5415923Z         
2026-05-05T00:55:46.5914960Z --- FAIL: TestAccCluster_basicAzure (2.23s)
```

- 2026-05-06

### Error 2026-05-06T00:50:51+00:00
```
2026-05-06T00:50:51.7984703Z === RUN   TestAccCluster_basicAzure
2026-05-06T00:50:56.7414572Z === CONT  TestAccCluster_basicAzure
2026-05-06T00:50:59.1119106Z === NAME  TestAccCluster_basicAzure
2026-05-06T00:50:59.1119905Z     resource_cluster_test.go:337: Step 1/2 error: Error running apply: exit status 1
2026-05-06T00:50:59.1120525Z         
2026-05-06T00:50:59.1122560Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69fa906960f26af82a9b1ef0/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-06T00:50:59.1124042Z         
2026-05-06T00:50:59.1124519Z           with mongodbatlas_cluster.basic_azure,
2026-05-06T00:50:59.1125488Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_azure":
2026-05-06T00:50:59.1126416Z           12: 		resource "mongodbatlas_cluster" "basic_azure" {
2026-05-06T00:50:59.1126916Z         
2026-05-06T00:50:59.1606434Z --- FAIL: TestAccCluster_basicAzure (2.43s)
```


## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 22 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 18 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 19 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 15 minutes
  - PASS 14 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 21 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 19 minutes
- 2026-05-04 PASS 17 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 20 minutes
