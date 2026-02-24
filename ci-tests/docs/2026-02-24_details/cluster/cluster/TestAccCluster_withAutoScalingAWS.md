# cluster/cluster/TestAccCluster_withAutoScalingAWS Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035100000) |  | dev | timeout | 10850.01s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 10856.00s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b9e3c7fce2317e1081/clusters | dev | out_of_capacity | 39.01s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 18 minutes
- 2026-01-28 PASS 19 minutes
- 2026-01-29 PASS 26 minutes
- 2026-01-30 PASS 32 minutes
- 2026-01-31

### Error 2026-01-31T00:35:10+00:00
```
2026-01-31T00:35:10.2876380Z === RUN   TestAccCluster_withAutoScalingAWS
2026-01-31T00:35:14.2532371Z === CONT  TestAccCluster_withAutoScalingAWS
2026-01-31T00:35:59.2504264Z === NAME  TestAccCluster_withAutoScalingAWS
2026-01-31T00:35:59.2506339Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:59.250125539Z, ProjectID: 697d4e3eff188f1e45c4593f, Cluster name: test-acc-tf-c-8688399700533443007
2026-01-31T03:36:00.3467442Z === NAME  TestAccCluster_withAutoScalingAWS
2026-01-31T03:36:00.3468181Z     resource_cluster_test.go:981: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:36:00.3468614Z         
2026-01-31T03:36:00.3469761Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:36:00.3470703Z         
2026-01-31T03:36:00.3471187Z           with mongodbatlas_cluster.test,
2026-01-31T03:36:00.3471884Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:36:00.3472586Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-01-31T03:36:00.3472998Z         
2026-01-31T03:36:00.3956645Z --- FAIL: TestAccCluster_withAutoScalingAWS (10850.09s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:37+00:00
```
2026-02-02T00:38:37.8794846Z === RUN   TestAccCluster_withAutoScalingAWS
2026-02-02T00:38:37.9035512Z === CONT  TestAccCluster_withAutoScalingAWS
2026-02-02T00:39:32.9045895Z === NAME  TestAccCluster_withAutoScalingAWS
2026-02-02T00:39:32.9047419Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:39:32.904207944Z, ProjectID: 697ff20a71768356d7f820d7, Cluster name: test-acc-tf-c-5440589269948436141
2026-02-02T03:39:33.8523015Z === NAME  TestAccCluster_withAutoScalingAWS
2026-02-02T03:39:33.8523830Z     resource_cluster_test.go:981: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:39:33.8524640Z         
2026-02-02T03:39:33.8525739Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:39:33.8526507Z         
2026-02-02T03:39:33.8526787Z           with mongodbatlas_cluster.test,
2026-02-02T03:39:33.8527559Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:39:33.8528108Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:39:33.8528386Z         
2026-02-02T03:39:33.8999504Z --- FAIL: TestAccCluster_withAutoScalingAWS (10856.01s)
```

- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.2159275Z === RUN   TestAccCluster_withAutoScalingAWS
2026-02-03T00:39:24.5632279Z === CONT  TestAccCluster_withAutoScalingAWS
2026-02-03T00:39:59.5676124Z === NAME  TestAccCluster_withAutoScalingAWS
2026-02-03T00:39:59.5677738Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:59.567309101Z, ProjectID: 698143b9e3c7fce2317e1081, Cluster name: test-acc-tf-c-2908210518754081079
2026-02-03T00:40:00.2812293Z    test_step_number=1
2026-02-03T00:40:00.2812902Z     resource_cluster_test.go:981: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:00.2813752Z         
2026-02-03T00:40:00.2815517Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b9e3c7fce2317e1081/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:40:00.2816695Z         
2026-02-03T00:40:00.2817039Z           with mongodbatlas_cluster.test,
2026-02-03T00:40:00.2817760Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:40:00.2818630Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-03T00:40:00.2819117Z         
2026-02-03T00:40:00.3277338Z --- FAIL: TestAccCluster_withAutoScalingAWS (39.11s)
```

- 2026-02-04 PASS 18 minutes
- 2026-02-05 PASS 21 minutes
- 2026-02-06 PASS 18 minutes
- 2026-02-07 PASS 17 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 26 minutes
- 2026-02-10 PASS 17 minutes
- 2026-02-11 PASS 16 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 21 minutes
- 2026-02-14 PASS 16 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 19 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 32 minutes
- 2026-02-20 PASS 16 minutes
- 2026-02-21 PASS 17 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 17 minutes
- 2026-02-24 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 16 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 15 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 25 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 17 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 19 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
