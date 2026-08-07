# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 24) FAIL(x 11)
Success rate: 68.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058060000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.06s
[2026-07-11 00:55](#error-2026-07-11t0055140000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 3.06s
[2026-07-14 00:45](#error-2026-07-14t0045400000) | Step 1 2 | dev |  | 1042.00s
[2026-07-16 00:49](#error-2026-07-16t0049090000) | Step 1 2 | dev |  | 5279.09s
[2026-07-18 00:51](#error-2026-07-18t0051140000) | Step 1 2 | dev |  | 1537.03s
[2026-07-21 00:53](#error-2026-07-21t0053120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.09s
[2026-07-23 00:49](#error-2026-07-23t0049390000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.00s
[2026-07-25 00:45](#error-2026-07-25t0045270000) | Step 1 2 | dev |  | 1094.08s
[2026-07-28 00:43](#error-2026-07-28t0043310000) | Step 1 2 | dev |  | 4589.06s
[2026-07-30 00:42](#error-2026-07-30t0042350000) | Step 1 2 | dev |  | 3931.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:06+00:00
```
2026-07-09T00:58:06.0779881Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-09T00:58:24.4649411Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-09T00:58:26.9808547Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-09T00:58:26.9809709Z     resource_test.go:705: Step 1/2 error: Error running apply: exit status 1
2026-07-09T00:58:26.9810404Z         
2026-07-09T00:58:26.9811170Z         Error: error creating project: test-acc-tf-p-8385560456491807873
2026-07-09T00:58:26.9811840Z         
2026-07-09T00:58:26.9812521Z           with mongodbatlas_project.cluster_project,
2026-07-09T00:58:26.9813853Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-09T00:58:26.9815318Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-09T00:58:26.9815981Z         
2026-07-09T00:58:26.9816901Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-09T00:58:26.9818172Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-09T00:58:26.9819412Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-09T00:58:26.9820620Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-09T00:58:26.9821431Z         BadRequestDetail: 
2026-07-09T00:58:27.0291251Z    test_name=TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-07-09T00:58:27.0561062Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (2.60s)
```

- 2026-07-10 PASS 45 minutes
- 2026-07-11

### Error 2026-07-11T00:55:14+00:00
```
2026-07-11T00:55:14.7543774Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-11T00:56:44.5623786Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-11T00:56:47.8478111Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-11T00:56:47.8478858Z     resource_test.go:705: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:56:47.8479321Z         
2026-07-11T00:56:47.8479885Z         Error: error creating project: test-acc-tf-p-5735772028244883697
2026-07-11T00:56:47.8480310Z         
2026-07-11T00:56:47.8480804Z           with mongodbatlas_project.cluster_project,
2026-07-11T00:56:47.8481657Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-11T00:56:47.8482552Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-11T00:56:47.8482918Z         
2026-07-11T00:56:47.8483449Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-11T00:56:47.8484331Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-11T00:56:47.8485009Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-11T00:56:47.8485661Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-11T00:56:47.8486119Z         BadRequestDetail: 
2026-07-11T00:56:47.8699249Z   
2026-07-11T00:56:47.9209696Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (3.59s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 22 minutes
- 2026-07-14

### Error 2026-07-14T00:45:40+00:00
```
2026-07-14T00:45:40.8890666Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-14T00:47:33.3433877Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-14T00:59:50.7643246Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-14T00:59:50.7644151Z     resource_test.go:705: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-07-14T00:59:50.7645150Z         <head>
2026-07-14T00:59:50.7645675Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-14T00:59:50.7646186Z         <title>Error 401 Unauthorized</title>
2026-07-14T00:59:50.7646514Z         </head>
2026-07-14T00:59:50.7646756Z         <body>
2026-07-14T00:59:50.7647064Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-14T00:59:50.7647375Z         <table>
2026-07-14T00:59:50.7648450Z         <tr><th>URI:</th><td>https://cloud-dev.mongodb.com/test/utils/auth/groups/6a558725281936d9b18d1b04/clusters/test-acc-tf-c-6958296158766796670/independentShardScalingMode</td></tr>
2026-07-14T00:59:50.7649330Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-14T00:59:50.7649771Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-14T00:59:50.7650117Z         </table>
2026-07-14T00:59:50.7650341Z         
2026-07-14T00:59:50.7650566Z         </body>
2026-07-14T00:59:50.7650795Z         </html>
2026-07-14T01:04:55.3327873Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1042.00s)
```

- 2026-07-15 PASS 19 minutes
- 2026-07-16

### Error 2026-07-16T00:49:09+00:00
```
2026-07-16T00:49:09.4362595Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-16T01:01:43.0732295Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-16T01:01:43.4843841Z   diagnostic_detail=
2026-07-16T01:01:43.4847802Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.11 tf_rpc=MoveResourceState
2026-07-16T02:08:45.3946869Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-16T02:08:45.3947856Z     resource_test.go:705: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-07-16T02:08:45.3948378Z         <head>
2026-07-16T02:08:45.3948935Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-16T02:08:45.3949361Z         <title>Error 401 Unauthorized</title>
2026-07-16T02:08:45.3949650Z         </head>
2026-07-16T02:08:45.3949869Z         <body>
2026-07-16T02:08:45.3950146Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-16T02:08:45.3950417Z         <table>
2026-07-16T02:08:45.3951259Z         <tr><th>URI:</th><td>https://cloud-dev.mongodb.com/test/utils/auth/groups/6a582d779bd40d6f4029711c/clusters/test-acc-tf-c-2995017097770284870/independentShardScalingMode</td></tr>
2026-07-16T02:08:45.3951941Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-16T02:08:45.3952310Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-16T02:08:45.3952598Z         </table>
2026-07-16T02:08:45.3952806Z         
2026-07-16T02:08:45.3953013Z         </body>
2026-07-16T02:08:45.3953215Z         </html>
2026-07-16T02:29:42.9238561Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (5279.85s)
```

- 2026-07-17 PASS 23 minutes
- 2026-07-18

### Error 2026-07-18T00:51:14+00:00
```
2026-07-18T00:51:14.2477035Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-18T00:54:19.3117539Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-18T01:13:18.8042308Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-18T01:13:18.8043672Z     resource_test.go:705: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-07-18T01:13:18.8044626Z         <head>
2026-07-18T01:13:18.8045491Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-18T01:13:18.8046443Z         <title>Error 401 Unauthorized</title>
2026-07-18T01:13:18.8047025Z         </head>
2026-07-18T01:13:18.8047429Z         <body>
2026-07-18T01:13:18.8047970Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-18T01:13:18.8048716Z         <table>
2026-07-18T01:13:18.8050733Z         <tr><th>URI:</th><td>https://cloud-dev.mongodb.com/test/utils/auth/groups/6a5acebf0fd53613457a3763/clusters/test-acc-tf-c-4423427288446066332/independentShardScalingMode</td></tr>
2026-07-18T01:13:18.8052386Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-18T01:13:18.8053509Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-18T01:13:18.8054148Z         </table>
2026-07-18T01:13:18.8054536Z         
2026-07-18T01:13:18.8054930Z         </body>
2026-07-18T01:13:18.8055333Z         </html>
2026-07-18T01:19:55.8974177Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1537.32s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:12+00:00
```
2026-07-21T00:53:12.2192946Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-21T00:53:23.4309523Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-21T00:53:25.2153500Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-21T00:53:25.2154353Z     resource_test.go:705: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:53:25.2154993Z         
2026-07-21T00:53:25.2155693Z         Error: error creating project: test-acc-tf-p-4795159246205963518
2026-07-21T00:53:25.2156299Z         
2026-07-21T00:53:25.2156887Z           with mongodbatlas_project.cluster_project,
2026-07-21T00:53:25.2157926Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-21T00:53:25.2158965Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-21T00:53:25.2159332Z         
2026-07-21T00:53:25.2160085Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:53:25.2161200Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:53:25.2161986Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:53:25.2162748Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:53:25.2163206Z         BadRequestDetail: 
2026-07-21T00:53:25.2173002Z    test_working_directory=/tmp/plugintest3153388414 test_terraform_path=/home/runner/work/_temp/a0841b06-cd14-47a5-8260-0a6593748416/terraform
2026-07-21T00:53:25.2862181Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1.86s)
```

- 2026-07-22 PASS 57 minutes
- 2026-07-23

### Error 2026-07-23T00:49:39+00:00
```
2026-07-23T00:49:39.4245324Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-23T00:49:49.7210773Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-23T00:49:51.6562263Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-23T00:49:51.6564076Z     resource_test.go:705: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:49:51.6565479Z         
2026-07-23T00:49:51.6566635Z         Error: error creating project: test-acc-tf-p-6368809349949974701
2026-07-23T00:49:51.6567799Z         
2026-07-23T00:49:51.6568894Z           with mongodbatlas_project.cluster_project,
2026-07-23T00:49:51.6570942Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-23T00:49:51.6572596Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-23T00:49:51.6573885Z         
2026-07-23T00:49:51.6575655Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:49:51.6577409Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:49:51.6580129Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:49:51.6581997Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:49:51.6583249Z         BadRequestDetail: 
2026-07-23T00:49:51.6882700Z    test_terraform_path=/home/runner/work/_temp/57c44fc3-b26f-4c1a-9fbd-d7a3b0d9d62e/terraform
2026-07-23T00:49:51.7480933Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (2.04s)
```

- 2026-07-24 PASS an hour
- 2026-07-25

### Error 2026-07-25T00:45:27+00:00
```
2026-07-25T00:45:27.7663853Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-25T00:47:06.7898754Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-25T00:59:18.2597475Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-25T00:59:18.2598077Z     resource_test.go:705: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-07-25T00:59:18.2598489Z         <head>
2026-07-25T00:59:18.2598839Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-25T00:59:18.2599257Z         <title>Error 401 Unauthorized</title>
2026-07-25T00:59:18.2599496Z         </head>
2026-07-25T00:59:18.2599680Z         <body>
2026-07-25T00:59:18.2600097Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-25T00:59:18.2600346Z         <table>
2026-07-25T00:59:18.2601138Z         <tr><th>URI:</th><td>https://cloud-dev.mongodb.com/test/utils/auth/groups/6a64078d3f1a2569632b8101/clusters/test-acc-tf-c-2172695419334225054/independentShardScalingMode</td></tr>
2026-07-25T00:59:18.2601804Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-25T00:59:18.2602178Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-25T00:59:18.2602514Z         </table>
2026-07-25T00:59:18.2602686Z         
2026-07-25T00:59:18.2602860Z         </body>
2026-07-25T00:59:18.2603039Z         </html>
2026-07-25T01:05:20.9234226Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1094.80s)
```

- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28

### Error 2026-07-28T00:43:31+00:00
```
2026-07-28T00:43:31.6579232Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-28T00:47:08.7225277Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-28T01:42:00.9556460Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-28T01:42:00.9557484Z     resource_test.go:705: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-07-28T01:42:00.9558196Z         <head>
2026-07-28T01:42:00.9558830Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-28T01:42:00.9559443Z         <title>Error 401 Unauthorized</title>
2026-07-28T01:42:00.9559777Z         </head>
2026-07-28T01:42:00.9560028Z         <body>
2026-07-28T01:42:00.9560464Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-28T01:42:00.9560852Z         <table>
2026-07-28T01:42:00.9562058Z         <tr><th>URI:</th><td>https://cloud-dev.mongodb.com/test/utils/auth/groups/6a67fc10818f7b3154f8b259/clusters/test-acc-tf-c-7980452965021497002/independentShardScalingMode</td></tr>
2026-07-28T01:42:00.9562941Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-28T01:42:00.9563386Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-28T01:42:00.9563734Z         </table>
2026-07-28T01:42:00.9563974Z         
2026-07-28T01:42:00.9564210Z         </body>
2026-07-28T01:42:00.9564456Z         </html>
2026-07-28T02:03:37.7153738Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (4589.64s)
```

- 2026-07-29 PASS 20 minutes
- 2026-07-30

### Error 2026-07-30T00:42:35+00:00
```
2026-07-30T00:42:35.9162599Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-30T01:09:35.9280759Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-30T01:54:59.3094621Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-30T01:54:59.3096130Z     resource_test.go:705: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-07-30T01:54:59.3097207Z         <head>
2026-07-30T01:54:59.3098046Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-30T01:54:59.3098878Z         <title>Error 401 Unauthorized</title>
2026-07-30T01:54:59.3099482Z         </head>
2026-07-30T01:54:59.3100010Z         <body>
2026-07-30T01:54:59.3100615Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-30T01:54:59.3101788Z         <table>
2026-07-30T01:54:59.3103431Z         <tr><th>URI:</th><td>https://cloud-dev.mongodb.com/test/utils/auth/groups/6a6aa4547e4f6ae89d445746/clusters/test-acc-tf-c-6539543144072296867/independentShardScalingMode</td></tr>
2026-07-30T01:54:59.3104820Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-30T01:54:59.3105570Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-30T01:54:59.3106340Z         </table>
2026-07-30T01:54:59.3106868Z         
2026-07-30T01:54:59.3107315Z         </body>
2026-07-30T01:54:59.3107749Z         </html>
2026-07-30T02:15:06.9346342Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (3931.69s)
```

- 2026-07-31
  - PASS 14 minutes
  - PASS 13 minutes
- 2026-08-01 PASS 13 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 12 minutes
- 2026-08-04 PASS 15 minutes
- 2026-08-05 PASS 14 minutes
- 2026-08-06 PASS 12 minutes
- 2026-08-07 PASS 12 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-29 13:17](#error-2026-07-29t1317490000) | Step 1 2 | qa | 854.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 20 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 18 minutes
  - PASS 13 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 17 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - FAIL 14 minutes

### Error 2026-07-29T13:17:49+00:00
```
2026-07-29T13:17:49.6508343Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-29T13:19:15.2551066Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-29T13:30:27.2335955Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-07-29T13:30:27.2337097Z     resource_test.go:705: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-07-29T13:30:27.2337747Z         <head>
2026-07-29T13:30:27.2338188Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-07-29T13:30:27.2338782Z         <title>Error 401 Unauthorized</title>
2026-07-29T13:30:27.2339152Z         </head>
2026-07-29T13:30:27.2339384Z         <body>
2026-07-29T13:30:27.2339692Z         <h2>HTTP ERROR 401 Unauthorized</h2>
2026-07-29T13:30:27.2339995Z         <table>
2026-07-29T13:30:27.2340961Z         <tr><th>URI:</th><td>https://cloud-qa.mongodb.com/test/utils/auth/groups/6a69fdd6d51fea57f48e9cee/clusters/test-acc-tf-c-4510238461088724401/independentShardScalingMode</td></tr>
2026-07-29T13:30:27.2341720Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-07-29T13:30:27.2342140Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-07-29T13:30:27.2342454Z         </table>
2026-07-29T13:30:27.2342683Z         
2026-07-29T13:30:27.2342905Z         </body>
2026-07-29T13:30:27.2343132Z         </html>
2026-07-29T13:30:44.3995834Z    test_terraform_path=/home/runner/work/_temp/114585ca-7637-4ca9-8d03-a2692bb9704e/terraform test_working_directory=/tmp/plugintest3269975668 test_step_number=3
2026-07-29T13:33:29.3421123Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (854.63s)
```

  - PASS 13 minutes
- 2026-07-30 PASS 13 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 14 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
