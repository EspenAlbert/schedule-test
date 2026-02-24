# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 24) FAIL(x 8)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035140000) |  | dev | flaky_500 | 10807.01s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 10807.03s
[2026-02-03 00:39](#error-2026-02-03t0039240000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143bee3c7fce2317e349a/clusters | dev | out_of_capacity | 8.05s
[2026-02-14 00:38](#error-2026-02-14t0038120000) | Step 1 4 | dev |  | 1127.02s
[2026-02-17 00:38](#error-2026-02-17t0038330000) | Step 1 4 | dev | flaky_500 | 960.06s
[2026-02-19 00:39](#error-2026-02-19t0039320000) | Step 1 4 | dev |  | 1383.05s
[2026-02-21 00:36](#error-2026-02-21t0036500000) | Step 1 4 | dev |  | 946.05s
[2026-02-24 00:37](#error-2026-02-24t0037020000) | Step 1 4 | dev |  | 1195.01s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 21 minutes
- 2026-01-27 PASS 24 minutes
- 2026-01-28 PASS 24 minutes
- 2026-01-29 PASS 44 minutes
- 2026-01-30 PASS 31 minutes
- 2026-01-31

### Error 2026-01-31T00:35:14+00:00
```
2026-01-31T00:35:14.2397736Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-01-31T00:35:14.2500684Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-01-31T03:35:20.8423395Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-01-31T03:35:20.8424411Z     resource_cluster_test.go:1303: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:35:20.8425182Z         
2026-01-31T03:35:20.8426248Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:20.8427055Z         
2026-01-31T03:35:20.8427455Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:20.8428074Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:20.8428652Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:20.8429542Z         
2026-01-31T03:35:21.3506649Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-01-31T03:35:21.3507293Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-31T03:35:21.3507766Z         
2026-01-31T03:35:21.3508068Z         Error: error when destroying resource
2026-01-31T03:35:21.3508369Z         
2026-01-31T03:35:21.3508707Z         error deleting project (697d4e44ff188f1e45c4b617):
2026-01-31T03:35:21.3509309Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e44ff188f1e45c4b617
2026-01-31T03:35:21.3509820Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-31T03:35:21.3510380Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-31T03:35:21.3511037Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-31T03:35:21.3511519Z         Params: [], BadRequestDetail: 
2026-01-31T03:35:21.3511886Z --- FAIL: TestAccCluster_basic_RedactClientLogData (10807.10s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:37+00:00
```
2026-02-02T00:38:37.8802143Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-02T00:38:37.8813555Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-02T03:38:44.6330058Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-02T03:38:44.6330931Z     resource_cluster_test.go:1303: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:38:44.6331565Z         
2026-02-02T03:38:44.6332628Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:44.6333186Z         
2026-02-02T03:38:44.6333604Z           with mongodbatlas_cluster.test,
2026-02-02T03:38:44.6334467Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:38:44.6335085Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:38:44.6335400Z         
2026-02-02T03:38:44.9768143Z    test_step_number=1 test_name=TestAccCluster_WithTags test_terraform_path=/home/runner/work/_temp/3d353ea1-6a07-441f-98c3-1c55053dc79f/terraform test_working_directory=/tmp/plugintest1470331716
2026-02-02T03:38:45.1462617Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-02T03:38:45.1463163Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-02T03:38:45.1463575Z         
2026-02-02T03:38:45.1464020Z         Error: error when destroying resource
2026-02-02T03:38:45.1464300Z         
2026-02-02T03:38:45.1464630Z         error deleting project (697ff20f71768356d7f84f20):
2026-02-02T03:38:45.1465167Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff20f71768356d7f84f20
2026-02-02T03:38:45.1465617Z         DELETE: HTTP 409 Conflict (Error code:
2026-02-02T03:38:45.1466117Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-02-02T03:38:45.1466709Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-02-02T03:38:45.1467122Z         Params: [], BadRequestDetail: 
2026-02-02T03:38:45.1467728Z --- FAIL: TestAccCluster_basic_RedactClientLogData (10807.26s)
```

- 2026-02-03

### Error 2026-02-03T00:39:24+00:00
```
2026-02-03T00:39:24.5576106Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-03T00:39:24.5585470Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-03T00:39:31.9333074Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-03T00:39:31.9334675Z     resource_cluster_test.go:1303: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:39:31.9335444Z         
2026-02-03T00:39:31.9337906Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143bee3c7fce2317e349a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:31.9339063Z         
2026-02-03T00:39:31.9339373Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:31.9339993Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:31.9340588Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-03T00:39:31.9340900Z         
2026-02-03T00:39:33.0557081Z --- FAIL: TestAccCluster_basic_RedactClientLogData (8.50s)
```

- 2026-02-04 PASS 23 minutes
- 2026-02-05 PASS 28 minutes
- 2026-02-06 PASS 26 minutes
- 2026-02-07 PASS 23 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 26 minutes
- 2026-02-10 PASS 24 minutes
- 2026-02-11 PASS 23 minutes
- 2026-02-12 PASS 26 minutes
- 2026-02-13 PASS 25 minutes
- 2026-02-14

### Error 2026-02-14T00:38:12+00:00
```
2026-02-14T00:38:12.1762642Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-14T00:38:12.1776313Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-14T00:54:05.5594082Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-14T00:54:05.5595199Z     resource_cluster_test.go:1303: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-14T00:54:05.5595982Z         <head>
2026-02-14T00:54:05.5596589Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-14T00:54:05.5597473Z         <title>Error 401 Unauthorized</title>
2026-02-14T00:54:05.5597784Z         </head>
2026-02-14T00:54:05.5598250Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-14T00:54:05.5598637Z         <table>
2026-02-14T00:54:05.5599708Z         <tr><th>URI:</th><td>/test/utils/auth/groups/698fc3f54f915aaf2d3073de/clusters/test-acc-tf-c-4428542023867768904/independentShardScalingMode</td></tr>
2026-02-14T00:54:05.5600444Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-14T00:54:05.5600850Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-14T00:54:05.5601164Z         </table>
2026-02-14T00:54:05.5601378Z         
2026-02-14T00:54:05.5601589Z         </body>
2026-02-14T00:54:05.5601806Z         </html>
2026-02-14T00:56:59.3565280Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1127.18s)
```

- 2026-02-15: MISSING
- 2026-02-16 PASS 25 minutes
- 2026-02-17

### Error 2026-02-17T00:38:33+00:00
```
2026-02-17T00:38:33.7392849Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-17T00:38:33.7411293Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-17T00:52:10.0740851Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-17T00:52:10.0743680Z     resource_cluster_test.go:1303: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-17T00:52:10.0744720Z         <head>
2026-02-17T00:52:10.0745522Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-17T00:52:10.0746321Z         <title>Error 401 Unauthorized</title>
2026-02-17T00:52:10.0746789Z         </head>
2026-02-17T00:52:10.0747121Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-17T00:52:10.0747428Z         <table>
2026-02-17T00:52:10.0748307Z         <tr><th>URI:</th><td>/test/utils/auth/groups/6993b88b3bd1e05530d34031/clusters/test-acc-tf-c-6242170432686280085/independentShardScalingMode</td></tr>
2026-02-17T00:52:10.0749346Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-17T00:52:10.0749770Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-17T00:52:10.0750085Z         </table>
2026-02-17T00:52:10.0750288Z         
2026-02-17T00:52:10.0750493Z         </body>
2026-02-17T00:52:10.0750703Z         </html>
2026-02-17T00:54:34.3313052Z --- FAIL: TestAccCluster_basic_RedactClientLogData (960.59s)
```

- 2026-02-18 PASS 26 minutes
- 2026-02-19

### Error 2026-02-19T00:39:32+00:00
```
2026-02-19T00:39:32.9694216Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-19T00:39:32.9702565Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-19T00:59:01.2795202Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-19T00:59:01.2796282Z     resource_cluster_test.go:1303: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-19T00:59:01.2797227Z         <head>
2026-02-19T00:59:01.2797686Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-19T00:59:01.2798182Z         <title>Error 401 Unauthorized</title>
2026-02-19T00:59:01.2798495Z         </head>
2026-02-19T00:59:01.2798822Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-19T00:59:01.2799128Z         <table>
2026-02-19T00:59:01.2800244Z         <tr><th>URI:</th><td>/test/utils/auth/groups/69965bc699696b9761bc2c2a/clusters/test-acc-tf-c-5584128951970470097/independentShardScalingMode</td></tr>
2026-02-19T00:59:01.2800999Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-19T00:59:01.2801409Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-19T00:59:01.2801726Z         </table>
2026-02-19T00:59:01.2801930Z         
2026-02-19T00:59:01.2802132Z         </body>
2026-02-19T00:59:01.2802340Z         </html>
2026-02-19T01:02:36.5087077Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1383.54s)
```

- 2026-02-20 PASS 26 minutes
- 2026-02-21

### Error 2026-02-21T00:36:50+00:00
```
2026-02-21T00:36:50.9053229Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-21T00:36:50.9169076Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-21T00:50:24.3559926Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-21T00:50:24.3561655Z     resource_cluster_test.go:1303: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-21T00:50:24.3562746Z         <head>
2026-02-21T00:50:24.3563639Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-21T00:50:24.3564562Z         <title>Error 401 Unauthorized</title>
2026-02-21T00:50:24.3565107Z         </head>
2026-02-21T00:50:24.3566137Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-21T00:50:24.3566715Z         <table>
2026-02-21T00:50:24.3568381Z         <tr><th>URI:</th><td>/test/utils/auth/groups/6998fe2431d3075768a975ee/clusters/test-acc-tf-c-2837426245446929161/independentShardScalingMode</td></tr>
2026-02-21T00:50:24.3569838Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-21T00:50:24.3570580Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-21T00:50:24.3571363Z         </table>
2026-02-21T00:50:24.3571728Z         
2026-02-21T00:50:24.3572089Z         </body>
2026-02-21T00:50:24.3572472Z         </html>
2026-02-21T00:52:37.3832047Z --- FAIL: TestAccCluster_basic_RedactClientLogData (946.47s)
```

- 2026-02-22: MISSING
- 2026-02-23 PASS 26 minutes
- 2026-02-24

### Error 2026-02-24T00:37:02+00:00
```
2026-02-24T00:37:02.7158658Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-24T00:37:02.7168825Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-24T00:53:15.4964518Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-24T00:53:15.4965633Z     resource_cluster_test.go:1303: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-24T00:53:15.4966256Z         <head>
2026-02-24T00:53:15.4966865Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-24T00:53:15.4967361Z         <title>Error 401 Unauthorized</title>
2026-02-24T00:53:15.4967653Z         </head>
2026-02-24T00:53:15.4967975Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-24T00:53:15.4968269Z         <table>
2026-02-24T00:53:15.4969116Z         <tr><th>URI:</th><td>/test/utils/auth/groups/699cf2b0ae2412ce6211fc50/clusters/test-acc-tf-c-8087344796261142575/independentShardScalingMode</td></tr>
2026-02-24T00:53:15.4969854Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-24T00:53:15.4970258Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-24T00:53:15.4970582Z         </table>
2026-02-24T00:53:15.4970800Z         
2026-02-24T00:53:15.4970999Z         </body>
2026-02-24T00:53:15.4971202Z         </html>
2026-02-24T00:53:27.4547712Z    test_name=TestAccCluster_partial_advancedConf
2026-02-24T00:56:57.8320967Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1195.12s)
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
- 2026-02-04 PASS 22 minutes
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
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 24 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 25 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
