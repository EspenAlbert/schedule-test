# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_biConnectorConfig Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035280000) |  | dev | timeout | 10830.07s
[2026-02-02 00:38](#error-2026-02-02t0038570000) |  | dev | timeout | 10853.07s
[2026-02-03 00:39](#error-2026-02-03t0039380000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters | dev | out_of_capacity | 55.08s
[2026-02-24 00:37](#error-2026-02-24t0037140000) |  | dev | flaky_500 | 1336.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 22 minutes
- 2026-01-27 PASS 25 minutes
- 2026-01-28 PASS 25 minutes
- 2026-01-29 PASS 32 minutes
- 2026-01-30 PASS 38 minutes
- 2026-01-31

### Error 2026-01-31T00:35:28+00:00
```
2026-01-31T00:35:28.7454310Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-01-31T00:36:56.1575577Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2026-01-31T00:37:26.1492645Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-01-31T00:37:26.1494581Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:37:26.149047986Z, ProjectID: 697d4e4eff188f1e45c520bf, Cluster name: test-acc-tf-c-5700406044808028351
2026-01-31T03:37:26.7941923Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-01-31T03:37:26.7942867Z     resource_test.go:822: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:37:26.7943523Z         
2026-01-31T03:37:26.7944201Z         Error: Error in create
2026-01-31T03:37:26.7944638Z         
2026-01-31T03:37:26.7945212Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:26.7945928Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:26.7946574Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:26.7946956Z         
2026-01-31T03:37:26.7947525Z         cluster=test-acc-tf-c-5700406044808028351 didn't reach desired state: IDLE,
2026-01-31T03:37:26.7948282Z         error: context deadline exceeded
2026-01-31T03:37:26.8506869Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10830.70s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:57+00:00
```
2026-02-02T00:38:57.3187657Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-02T00:40:26.8735908Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-02T00:40:27.0794381Z   diagnostic_detail=
2026-02-02T00:40:27.0800865Z    diagnostic_severity=ERROR diagnostic_summary="Unable to Move Resource State" tf_proto_version=6.10 tf_rpc=MoveResourceState
2026-02-02T00:41:19.9241527Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-02T00:41:19.9245292Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:41:19.923831677Z, ProjectID: 697ff21e71768356d7f8cd02, Cluster name: test-acc-tf-c-1686211741788110866
2026-02-02T03:41:20.5367080Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-02T03:41:20.5368078Z     resource_test.go:822: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:41:20.5368654Z         
2026-02-02T03:41:20.5369132Z         Error: Error in create
2026-02-02T03:41:20.5369515Z         
2026-02-02T03:41:20.5370073Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:41:20.5371270Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:41:20.5372477Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:41:20.5372969Z         
2026-02-02T03:41:20.5373653Z         cluster=test-acc-tf-c-1686211741788110866 didn't reach desired state: IDLE,
2026-02-02T03:41:20.5374255Z         error: context deadline exceeded
2026-02-02T03:41:20.5883276Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (10853.72s)
```

- 2026-02-03

### Error 2026-02-03T00:39:38+00:00
```
2026-02-03T00:39:38.8185354Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-03T00:42:03.7087952Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-03T00:42:58.6611611Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-03T00:42:58.6613122Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:42:58.660808331Z, ProjectID: 698143c8b2e54ee99590ed7c, Cluster name: test-acc-tf-c-8085844712865009746
2026-02-03T00:42:59.4132382Z   
2026-02-03T00:42:59.4133088Z     resource_test.go:822: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:42:59.4133786Z         
2026-02-03T00:42:59.4134252Z         Error: Error in create
2026-02-03T00:42:59.4134688Z         
2026-02-03T00:42:59.4135293Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:59.4136523Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:59.4137679Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:59.4138270Z         
2026-02-03T00:42:59.4139122Z         cluster name: test-acc-tf-c-8085844712865009746, API error details:
2026-02-03T00:42:59.4140372Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c8b2e54ee99590ed7c/clusters
2026-02-03T00:42:59.4141647Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:59.4142869Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:59.4143789Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:59.4719496Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (55.77s)
```

- 2026-02-04 PASS 19 minutes
- 2026-02-05 PASS 26 minutes
- 2026-02-06 PASS 23 minutes
- 2026-02-07 PASS 21 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 22 minutes
- 2026-02-11 PASS 21 minutes
- 2026-02-12 PASS 23 minutes
- 2026-02-13 PASS 23 minutes
- 2026-02-14 PASS 23 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 23 minutes
- 2026-02-17 PASS 21 minutes
- 2026-02-18 PASS 25 minutes
- 2026-02-19 PASS 37 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 23 minutes
- 2026-02-24

### Error 2026-02-24T00:37:14+00:00
```
2026-02-24T00:37:14.8708714Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-24T00:40:00.5723455Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-24T00:40:55.5573710Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-24T00:40:55.5575821Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:55.557074903Z, ProjectID: 699cf2b8ae2412ce62124f74, Cluster name: test-acc-tf-c-7915405810147094661
2026-02-24T00:59:13.6884313Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-02-24T00:59:13.6885138Z     resource_test.go:821: Step 2/3 error: Error running apply: exit status 1
2026-02-24T00:59:13.6885588Z         
2026-02-24T00:59:13.6885868Z         Error: Error in update
2026-02-24T00:59:13.6886244Z         
2026-02-24T00:59:13.6886612Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:59:13.6887523Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:59:13.6888370Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:59:13.6888808Z         
2026-02-24T00:59:13.6889461Z         cluster name: test-acc-tf-c-7915405810147094661, API error details: (503
2026-02-24T00:59:13.6896434Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:02:17.0631375Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (1336.49s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 24 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 24 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 27 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 22 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
