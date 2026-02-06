# cluster/cluster/TestAccCluster_AWSWithLabels Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035100000) |  | dev | timeout | 10811.01s
[2026-02-02 00:38](#error-2026-02-02t0038340000) |  | dev | timeout | 10864.00s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b6e3c7fce2317df7df/clusters | dev | out_of_capacity | 10.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 23 minutes
- 2026-01-09 PASS 27 minutes
- 2026-01-10 PASS 21 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 26 minutes
- 2026-01-13 PASS 29 minutes
- 2026-01-14 PASS 25 minutes
- 2026-01-15 PASS 25 minutes
- 2026-01-16 PASS 25 minutes
- 2026-01-17 PASS 24 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 22 minutes
- 2026-01-20 PASS 24 minutes
- 2026-01-21 PASS 25 minutes
- 2026-01-22 PASS 24 minutes
- 2026-01-23 PASS 23 minutes
- 2026-01-24 PASS 21 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 20 minutes
- 2026-01-27 PASS 24 minutes
- 2026-01-28 PASS 24 minutes
- 2026-01-29 PASS 29 minutes
- 2026-01-30 PASS 32 minutes
- 2026-01-31

### Error 2026-01-31T00:35:10+00:00
```
2026-01-31T00:35:10.2858891Z === RUN   TestAccCluster_AWSWithLabels
2026-01-31T00:35:14.2409363Z === CONT  TestAccCluster_AWSWithLabels
2026-01-31T00:35:24.2409745Z === NAME  TestAccCluster_AWSWithLabels
2026-01-31T00:35:24.2411073Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:24.24073081Z, ProjectID: 697d4e3bff188f1e45c43167, Cluster name: test-acc-tf-c-7643518818562298461
2026-01-31T03:35:25.2943905Z === NAME  TestAccCluster_AWSWithLabels
2026-01-31T03:35:25.2944536Z     resource_cluster_test.go:621: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:35:25.2945065Z         
2026-01-31T03:35:25.2946350Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:25.2947209Z         
2026-01-31T03:35:25.2947690Z           with mongodbatlas_cluster.aws_with_labels,
2026-01-31T03:35:25.2948502Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "aws_with_labels":
2026-01-31T03:35:25.2949306Z           12: 		resource "mongodbatlas_cluster" "aws_with_labels" {
2026-01-31T03:35:25.2950111Z         
2026-01-31T03:35:25.3407030Z --- FAIL: TestAccCluster_AWSWithLabels (10811.10s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:34+00:00
```
2026-02-02T00:38:34.8400191Z === RUN   TestAccCluster_AWSWithLabels
2026-02-02T00:38:37.9046018Z === CONT  TestAccCluster_AWSWithLabels
2026-02-02T00:39:37.9070107Z === NAME  TestAccCluster_AWSWithLabels
2026-02-02T00:39:37.9071173Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:39:37.906754739Z, ProjectID: 697ff20a71768356d7f820d7, Cluster name: test-acc-tf-c-1316864272875433576
2026-02-02T03:39:38.8496016Z === NAME  TestAccCluster_AWSWithLabels
2026-02-02T03:39:38.8496904Z     resource_cluster_test.go:621: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:39:38.8497595Z         
2026-02-02T03:39:38.8498819Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:39:38.8499763Z         
2026-02-02T03:39:38.8500331Z           with mongodbatlas_cluster.aws_with_labels,
2026-02-02T03:39:38.8501517Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "aws_with_labels":
2026-02-02T03:39:38.8502639Z           12: 		resource "mongodbatlas_cluster" "aws_with_labels" {
2026-02-02T03:39:38.8503182Z         
2026-02-02T03:39:38.8999475Z --- FAIL: TestAccCluster_AWSWithLabels (10864.05s)
```

- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.2147911Z === RUN   TestAccCluster_AWSWithLabels
2026-02-03T00:39:24.5581848Z === CONT  TestAccCluster_AWSWithLabels
2026-02-03T00:39:34.5586577Z === NAME  TestAccCluster_AWSWithLabels
2026-02-03T00:39:34.5588408Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:34.558352684Z, ProjectID: 698143b6e3c7fce2317df7df, Cluster name: test-acc-tf-c-8176516170457609281
2026-02-03T00:39:35.2555554Z    test_name=TestAccCluster_AWSWithLabels test_working_directory=/tmp/plugintest1239318310
2026-02-03T00:39:35.2556282Z     resource_cluster_test.go:621: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:39:35.2556713Z         
2026-02-03T00:39:35.2558103Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b6e3c7fce2317df7df/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:35.2559094Z         
2026-02-03T00:39:35.2559438Z           with mongodbatlas_cluster.aws_with_labels,
2026-02-03T00:39:35.2560245Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "aws_with_labels":
2026-02-03T00:39:35.2560913Z           12: 		resource "mongodbatlas_cluster" "aws_with_labels" {
2026-02-03T00:39:35.2561253Z         
2026-02-03T00:39:35.3029516Z --- FAIL: TestAccCluster_AWSWithLabels (10.75s)
```

- 2026-02-04 PASS 23 minutes
- 2026-02-05 PASS 28 minutes
- 2026-02-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 24 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 23 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 21 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 23 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 23 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 24 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
