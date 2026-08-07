# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 21) FAIL(x 11)
Success rate: 65.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:55](#error-2026-07-09t0055380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s
[2026-07-11 00:43](#error-2026-07-11t0043200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.07s
[2026-07-14 00:45](#error-2026-07-14t0045050000) | Step 1 4 | dev |  | 1105.07s
[2026-07-16 00:43](#error-2026-07-16t0043220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.04s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | Step 1 4 | dev |  | 1166.09s
[2026-07-21 00:52](#error-2026-07-21t0052330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.05s
[2026-07-23 00:48](#error-2026-07-23t0048240000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.06s
[2026-07-25 00:45](#error-2026-07-25t0045290000) | Step 1 4 | dev |  | 1184.04s
[2026-07-28 00:43](#error-2026-07-28t0043160000) | Step 1 4 | dev |  | 3173.06s
[2026-07-30 00:42](#error-2026-07-30t0042080000) | Step 1 4 | dev |  | 4371.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:55:38+00:00
```
2026-07-09T00:55:38.8819321Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-07-09T00:55:38.8826382Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-07-09T00:56:43.2131589Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-07-09T00:56:43.2132512Z     resource_cluster_test.go:1281: Step 1/4 error: Error running apply: exit status 1
2026-07-09T00:56:43.2133459Z         
2026-07-09T00:56:43.2134003Z         Error: error creating project: test-acc-tf-p-6055933527372646869
2026-07-09T00:56:43.2134396Z         
2026-07-09T00:56:43.2134723Z           with mongodbatlas_project.test,
2026-07-09T00:56:43.2135363Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:56:43.2136087Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:56:43.2136884Z         
2026-07-09T00:56:43.2137425Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:56:43.2138094Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:56:43.2138707Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:56:43.2597988Z --- FAIL: TestAccCluster_basic_RedactClientLogData (64.38s)
```

- 2026-07-10 PASS 54 minutes
- 2026-07-11

### Error 2026-07-11T00:43:20+00:00
```
2026-07-11T00:43:20.5969096Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-07-11T00:43:20.5975400Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-07-11T00:44:37.2080710Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-07-11T00:44:37.2081398Z     resource_cluster_test.go:1281: Step 1/4 error: Error running apply: exit status 1
2026-07-11T00:44:37.2082350Z         
2026-07-11T00:44:37.2082909Z         Error: error creating project: test-acc-tf-p-2441994474252364344
2026-07-11T00:44:37.2083289Z         
2026-07-11T00:44:37.2083603Z           with mongodbatlas_project.test,
2026-07-11T00:44:37.2084188Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:44:37.2084944Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:44:37.2085436Z         
2026-07-11T00:44:37.2086079Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:44:37.2086702Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:44:37.2087270Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:37.2609480Z --- FAIL: TestAccCluster_basic_RedactClientLogData (76.66s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 30 minutes
- 2026-07-14

### Error 2026-07-14T00:45:05+00:00
```
2026-07-14T00:45:05.6214616Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-07-14T00:45:05.6511244Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-07-14T00:59:15.1245702Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-07-14T00:59:15.1246802Z     resource_cluster_test.go:1281: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-07-14T00:59:15.1247592Z         <head>
2026-07-14T00:59:15.1248207Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-14T00:59:15.1248811Z         <title>Error 401 Unauthorized</title>
2026-07-14T00:59:15.1249177Z         </head>
2026-07-14T00:59:15.1249552Z         <body>
2026-07-14T00:59:15.1249929Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-14T00:59:15.1250560Z         <table>
2026-07-14T00:59:15.1251822Z         <tr><th>URI:</th><td>https://cloud-dev.mongodb.com/test/utils/auth/groups/6a558693281936d9b18bf37f/clusters/test-acc-tf-c-5680909004954504917/independentShardScalingMode</td></tr>
2026-07-14T00:59:15.1252904Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-14T00:59:15.1253393Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-14T00:59:15.1253792Z         </table>
2026-07-14T00:59:15.1254074Z         
2026-07-14T00:59:15.1254334Z         </body>
2026-07-14T00:59:15.1254616Z         </html>
2026-07-14T01:03:31.3054072Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1105.68s)
```

- 2026-07-15 PASS 34 minutes
- 2026-07-16

### Error 2026-07-16T00:43:22+00:00
```
2026-07-16T00:43:22.3450179Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-07-16T00:43:22.3544131Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-07-16T00:44:33.7210483Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-07-16T00:44:33.7211118Z     resource_cluster_test.go:1281: Step 1/4 error: Error running apply: exit status 1
2026-07-16T00:44:33.7211809Z         
2026-07-16T00:44:33.7212820Z         Error: error creating project: test-acc-tf-p-4364095768598064512
2026-07-16T00:44:33.7213330Z         
2026-07-16T00:44:33.7213659Z           with mongodbatlas_project.test,
2026-07-16T00:44:33.7214491Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:33.7215285Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:33.7215617Z         
2026-07-16T00:44:33.7216112Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:33.7216768Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:33.7217382Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:33.7723608Z --- FAIL: TestAccCluster_basic_RedactClientLogData (71.43s)
```

- 2026-07-17 PASS 36 minutes
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.3829320Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-07-18T00:49:47.3839353Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-07-18T01:04:17.4718520Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-07-18T01:04:17.4719697Z     resource_cluster_test.go:1281: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-07-18T01:04:17.4720459Z         <head>
2026-07-18T01:04:17.4721015Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-18T01:04:17.4721588Z         <title>Error 401 Unauthorized</title>
2026-07-18T01:04:17.4721948Z         </head>
2026-07-18T01:04:17.4722483Z         <body>
2026-07-18T01:04:17.4722835Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-18T01:04:17.4723186Z         <table>
2026-07-18T01:04:17.4724303Z         <tr><th>URI:</th><td>https://cloud-dev.mongodb.com/test/utils/auth/groups/6a5acdad0fd536134579d387/clusters/test-acc-tf-c-1624722551108946059/independentShardScalingMode</td></tr>
2026-07-18T01:04:17.4725209Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-18T01:04:17.4725638Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-18T01:04:17.4725978Z         </table>
2026-07-18T01:04:17.4726200Z         
2026-07-18T01:04:17.4726424Z         </body>
2026-07-18T01:04:17.4726660Z         </html>
2026-07-18T01:09:14.3074007Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1166.92s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:33+00:00
```
2026-07-21T00:52:33.5465366Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-07-21T00:52:33.5667954Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-07-21T00:52:34.7776203Z   
2026-07-21T00:52:35.0385996Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-07-21T00:52:35.0387028Z     resource_cluster_test.go:1281: Step 1/4 error: Error running apply: exit status 1
2026-07-21T00:52:35.0387761Z         
2026-07-21T00:52:35.0388540Z         Error: error creating project: test-acc-tf-p-6732422563020390722
2026-07-21T00:52:35.0389202Z         
2026-07-21T00:52:35.0389754Z           with mongodbatlas_project.test,
2026-07-21T00:52:35.0390895Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:52:35.0391958Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:52:35.0392515Z         
2026-07-21T00:52:35.0393416Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:52:35.0394687Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:52:35.0396168Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:52:35.0397380Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:52:35.0398138Z         BadRequestDetail: 
2026-07-21T00:52:35.0889904Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1.55s)
```

- 2026-07-22 PASS 34 minutes
- 2026-07-23

### Error 2026-07-23T00:48:24+00:00
```
2026-07-23T00:48:24.6496294Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-07-23T00:48:24.6501962Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-07-23T00:48:26.2130571Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-07-23T00:48:26.2131216Z     resource_cluster_test.go:1281: Step 1/4 error: Error running apply: exit status 1
2026-07-23T00:48:26.2131937Z         
2026-07-23T00:48:26.2132398Z         Error: error creating project: test-acc-tf-p-8469618462959398530
2026-07-23T00:48:26.2132888Z         
2026-07-23T00:48:26.2133211Z           with mongodbatlas_project.test,
2026-07-23T00:48:26.2133951Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:48:26.2134642Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:48:26.2134960Z         
2026-07-23T00:48:26.2135566Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:48:26.2136352Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:48:26.2137143Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:48:26.2137898Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:48:26.2138435Z         BadRequestDetail: 
2026-07-23T00:48:26.2644385Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1.62s)
```

- 2026-07-24 PASS 47 minutes
- 2026-07-25

### Error 2026-07-25T00:45:29+00:00
```
2026-07-25T00:45:29.3191931Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-07-25T00:45:29.3226459Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-07-25T00:58:59.7431223Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-07-25T00:58:59.7432488Z     resource_cluster_test.go:1281: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-07-25T00:58:59.7433194Z         <head>
2026-07-25T00:58:59.7433695Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-25T00:58:59.7434216Z         <title>Error 401 Unauthorized</title>
2026-07-25T00:58:59.7434544Z         </head>
2026-07-25T00:58:59.7434788Z         <body>
2026-07-25T00:58:59.7435134Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-25T00:58:59.7435449Z         <table>
2026-07-25T00:58:59.7436548Z         <tr><th>URI:</th><td>https://cloud-dev.mongodb.com/test/utils/auth/groups/6a64072b3f1a2569632a564f/clusters/test-acc-tf-c-5152605602255139781/independentShardScalingMode</td></tr>
2026-07-25T00:58:59.7437444Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-25T00:58:59.7437873Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-25T00:58:59.7438216Z         </table>
2026-07-25T00:58:59.7438446Z         
2026-07-25T00:58:59.7438667Z         </body>
2026-07-25T00:58:59.7438901Z         </html>
2026-07-25T01:05:13.7134552Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1184.39s)
```

- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28

### Error 2026-07-28T00:43:16+00:00
```
2026-07-28T00:43:16.6323633Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-07-28T00:43:16.6501038Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-07-28T01:13:10.1878394Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-07-28T01:13:10.1879152Z     resource_cluster_test.go:1281: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-07-28T01:13:10.1882085Z         <head>
2026-07-28T01:13:10.1882573Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-28T01:13:10.1883073Z         <title>Error 401 Unauthorized</title>
2026-07-28T01:13:10.1883402Z         </head>
2026-07-28T01:13:10.1883688Z         <body>
2026-07-28T01:13:10.1884033Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-28T01:13:10.1884366Z         <table>
2026-07-28T01:13:10.1885398Z         <tr><th>URI:</th><td>https://cloud-dev.mongodb.com/test/utils/auth/groups/6a67fb262f5a43fb2606218d/clusters/test-acc-tf-c-4274530531485504566/independentShardScalingMode</td></tr>
2026-07-28T01:13:10.1886099Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-28T01:13:10.1886459Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-28T01:13:10.1886753Z         </table>
2026-07-28T01:13:10.1886966Z         
2026-07-28T01:13:10.1887176Z         </body>
2026-07-28T01:13:10.1887398Z         </html>
2026-07-28T01:36:10.2193566Z --- FAIL: TestAccCluster_basic_RedactClientLogData (3173.59s)
```

- 2026-07-29 PASS 34 minutes
- 2026-07-30

### Error 2026-07-30T00:42:08+00:00
```
2026-07-30T00:42:08.3208528Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-07-30T00:42:08.3233507Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-07-30T01:41:22.3328298Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-07-30T01:41:22.3329427Z     resource_cluster_test.go:1281: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-07-30T01:41:22.3330250Z         <head>
2026-07-30T01:41:22.3330755Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-30T01:41:22.3331279Z         <title>Error 401 Unauthorized</title>
2026-07-30T01:41:22.3331596Z         </head>
2026-07-30T01:41:22.3331841Z         <body>
2026-07-30T01:41:22.3332155Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-30T01:41:22.3332465Z         <table>
2026-07-30T01:41:22.3333566Z         <tr><th>URI:</th><td>https://cloud-dev.mongodb.com/test/utils/auth/groups/6a6a9de2527365c99a90227b/clusters/test-acc-tf-c-4247383736264753749/independentShardScalingMode</td></tr>
2026-07-30T01:41:22.3334453Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-30T01:41:22.3334908Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-30T01:41:22.3335256Z         </table>
2026-07-30T01:41:22.3335484Z         
2026-07-30T01:41:22.3335705Z         </body>
2026-07-30T01:41:22.3336127Z         </html>
2026-07-30T01:54:59.8801071Z --- FAIL: TestAccCluster_basic_RedactClientLogData (4371.56s)
```

- 2026-07-31 PASS 23 minutes
- 2026-08-01 PASS 24 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 23 minutes
- 2026-08-04 PASS 21 minutes
- 2026-08-05 PASS 21 minutes
- 2026-08-06 PASS 22 minutes
- 2026-08-07 PASS 22 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-29 13:17](#error-2026-07-29t1317190000) | Step 1 4 | qa | 881.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 30 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 31 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 32 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - FAIL 14 minutes

### Error 2026-07-29T13:17:19+00:00
```
2026-07-29T13:17:19.3674963Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-07-29T13:17:19.3701020Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-07-29T13:29:38.7953874Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-07-29T13:29:38.7955056Z     resource_cluster_test.go:1281: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-07-29T13:29:38.7955591Z         <head>
2026-07-29T13:29:38.7956019Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-29T13:29:38.7956453Z         <title>Error 401 Unauthorized</title>
2026-07-29T13:29:38.7956729Z         </head>
2026-07-29T13:29:38.7956937Z         <body>
2026-07-29T13:29:38.7957212Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-29T13:29:38.7957486Z         <table>
2026-07-29T13:29:38.7958537Z         <tr><th>URI:</th><td>https://cloud-qa.mongodb.com/test/utils/auth/groups/6a69fd6080bf86ddc5cb311b/clusters/test-acc-tf-c-2860823012475654890/independentShardScalingMode</td></tr>
2026-07-29T13:29:38.7959309Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-29T13:29:38.7959700Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-29T13:29:38.7960002Z         </table>
2026-07-29T13:29:38.7960198Z         
2026-07-29T13:29:38.7960407Z         </body>
2026-07-29T13:29:38.7960630Z         </html>
2026-07-29T13:32:01.0097219Z --- FAIL: TestAccCluster_basic_RedactClientLogData (881.64s)
```

  - PASS 30 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 22 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
