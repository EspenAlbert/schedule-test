# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 27) FAIL(x 6)
Success rate: 81.82%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-18 00:26](#error-2025-10-18t0026520000) | Step 1 2 | dev |  | 886.04s
[2025-10-20 10:26](#error-2025-10-20t1026370000) | Step 1 2 | dev |  | 799.06s
[2025-10-21 00:28](#error-2025-10-21t0028270000) | Step 1 2 | dev | unknown | 888.10s
[2025-10-30 00:28](#error-2025-10-30t0028220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b183e2dc7470847cbcb5 | dev | flaky_500 | 1072.04s
[2025-11-08 00:29](#error-2025-11-08t0029120000) |  | dev |  | 11003.02s
[2025-11-13 07:53](#error-2025-11-13t0753210000) |  | qa | flaky_400 | 8.06s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 20 minutes
- 2025-10-16 PASS 29 minutes
- 2025-10-17 PASS 15 minutes
- 2025-10-18

### Error 2025-10-18T00:26:52+00:00
```
2025-10-18T00:26:52.7015080Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-18T00:28:20.5088384Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-18T00:28:21.7629311Z   diagnostic_detail=
2025-10-18T00:28:21.7634855Z    tf_rpc=ValidateResourceConfig tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2025-10-18T00:38:02.3403074Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-18T00:38:02.3404021Z     resource_test.go:716: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2025-10-18T00:38:02.3404684Z         <head>
2025-10-18T00:38:02.3405328Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2025-10-18T00:38:02.3406011Z         <title>Error 401 Unauthorized</title>
2025-10-18T00:38:02.3406301Z         </head>
2025-10-18T00:38:02.3406611Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2025-10-18T00:38:02.3406909Z         <table>
2025-10-18T00:38:02.3407735Z         <tr><th>URI:</th><td>/test/utils/auth/groups/68f2df278a4bcb28a666dc93/clusters/test-acc-tf-c-83391404301620953/independentShardScalingMode</td></tr>
2025-10-18T00:38:02.3408434Z         <tr><th>STATUS:</th><td>401</td></tr>
2025-10-18T00:38:02.3408820Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2025-10-18T00:38:02.3409127Z         </table>
2025-10-18T00:38:02.3409341Z         
2025-10-18T00:38:02.3409542Z         </body>
2025-10-18T00:38:02.3409749Z         </html>
2025-10-18T00:43:06.9256554Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (886.45s)
```

- 2025-10-19 PASS 13 minutes
- 2025-10-20
  - PASS 16 minutes
  - FAIL 13 minutes

### Error 2025-10-20T10:26:37+00:00
```
2025-10-20T10:26:37.8339799Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-20T10:28:27.7311158Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-20T10:38:13.0062336Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-20T10:38:13.0063323Z     resource_test.go:716: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2025-10-20T10:38:13.0064201Z         <head>
2025-10-20T10:38:13.0064669Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2025-10-20T10:38:13.0065145Z         <title>Error 401 Unauthorized</title>
2025-10-20T10:38:13.0065444Z         </head>
2025-10-20T10:38:13.0066043Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2025-10-20T10:38:13.0066362Z         <table>
2025-10-20T10:38:13.0067520Z         <tr><th>URI:</th><td>/test/utils/auth/groups/68f60ecfde46041f566a7a30/clusters/test-acc-tf-c-6144174014384910064/independentShardScalingMode</td></tr>
2025-10-20T10:38:13.0068424Z         <tr><th>STATUS:</th><td>401</td></tr>
2025-10-20T10:38:13.0068840Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2025-10-20T10:38:13.0069162Z         </table>
2025-10-20T10:38:13.0069376Z         
2025-10-20T10:38:13.0069585Z         </body>
2025-10-20T10:38:13.0069799Z         </html>
2025-10-20T10:41:47.2987496Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (799.57s)
```

- 2025-10-21

### Error 2025-10-21T00:28:27+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-10-21T00:28:27.374000+00:00-TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema',confidence=1.0,ts_when='23 days ago')
Step 1 2
```
2025-10-21T00:28:27.3745068Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-21T00:30:16.2683057Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-21T00:40:30.2603046Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-21T00:40:30.2604121Z     resource_test.go:716: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2025-10-21T00:40:30.2604788Z         <head>
2025-10-21T00:40:30.2605264Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2025-10-21T00:40:30.2605748Z         <title>Error 401 Unauthorized</title>
2025-10-21T00:40:30.2606330Z         </head>
2025-10-21T00:40:30.2606660Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2025-10-21T00:40:30.2606967Z         <table>
2025-10-21T00:40:30.2607853Z         <tr><th>URI:</th><td>/test/utils/auth/groups/68f6d41be39c7f69e00d41f5/clusters/test-acc-tf-c-3793026625559887249/independentShardScalingMode</td></tr>
2025-10-21T00:40:30.2608609Z         <tr><th>STATUS:</th><td>401</td></tr>
2025-10-21T00:40:30.2609017Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2025-10-21T00:40:30.2609331Z         </table>
2025-10-21T00:40:30.2609551Z         
2025-10-21T00:40:30.2609769Z         </body>
2025-10-21T00:40:30.2609985Z         </html>
2025-10-21T00:45:05.2521635Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (888.99s)
```

- 2025-10-22
  - PASS 33 minutes
  - PASS 12 minutes
- 2025-10-23 PASS 27 minutes
- 2025-10-24 PASS 14 minutes
- 2025-10-25 PASS 12 minutes
- 2025-10-26 PASS 13 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 14 minutes
- 2025-10-29 PASS 24 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2614867Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-30T00:29:52.4650339Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-30T00:47:44.8624991Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-30T00:47:44.8625709Z     resource_test.go:716: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:47:44.8626175Z         
2025-10-30T00:47:44.8626471Z         Error: error when destroying resource
2025-10-30T00:47:44.8626747Z         
2025-10-30T00:47:44.8627082Z         error deleting project (6902b183e2dc7470847cbcb5):
2025-10-30T00:47:44.8627655Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b183e2dc7470847cbcb5
2025-10-30T00:47:44.8628268Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:47:44.8628855Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:47:44.8629252Z         BadRequestDetail: 
2025-10-30T00:47:44.8629665Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1072.40s)
```

- 2025-10-31 PASS 20 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 13 minutes
- 2025-11-03 PASS 18 minutes
- 2025-11-04 PASS 16 minutes
- 2025-11-05
  - PASS 18 minutes
  - PASS 11 minutes
- 2025-11-06 PASS 22 minutes
- 2025-11-07 PASS 15 minutes
- 2025-11-08

### Error 2025-11-08T00:29:12+00:00
```
2025-11-08T00:29:12.0963918Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-08T00:31:08.7378423Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-08T03:31:16.8525037Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-08T03:31:16.8525916Z     resource_test.go:716: Step 1/2 error: Error running apply: exit status 1
2025-11-08T03:31:16.8526299Z         
2025-11-08T03:31:16.8526552Z         Error: Error in create
2025-11-08T03:31:16.8526796Z         
2025-11-08T03:31:16.8527117Z           with mongodbatlas_advanced_cluster.test,
2025-11-08T03:31:16.8528199Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-08T03:31:16.8528801Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-08T03:31:16.8529110Z         
2025-11-08T03:31:16.8529802Z         cluster=test-acc-tf-c-8587692970019470544 didn't reach desired state: IDLE,
2025-11-08T03:31:16.8530287Z         error: context deadline exceeded
2025-11-08T03:31:18.0020630Z   
2025-11-08T03:34:31.9474009Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11003.21s)
```

- 2025-11-09 PASS 13 minutes
- 2025-11-10 PASS 12 minutes
- 2025-11-11 PASS 14 minutes
- 2025-11-12 PASS 16 minutes
- 2025-11-13
  - PASS 37 minutes
  - FAIL 8 seconds

### Error 2025-11-13T07:53:21+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-11-13T07:53:21.418000+00:00-TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema',confidence=1.0,ts_when='a minute ago')

```
2025-11-13T07:53:21.4182569Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-13T07:54:58.4335497Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-13T07:55:06.3465597Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-11-13T07:55:06.3466878Z     resource_test.go:717: Step 1/2 error: Error running apply: exit status 1
2025-11-13T07:55:06.3467652Z         
2025-11-13T07:55:06.3468058Z         Error: Error in create
2025-11-13T07:55:06.3468425Z         
2025-11-13T07:55:06.3468916Z           with mongodbatlas_advanced_cluster.test,
2025-11-13T07:55:06.3469864Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-13T07:55:06.3470655Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-13T07:55:06.3470961Z         
2025-11-13T07:55:06.3471465Z         cluster name: test-acc-tf-c-4595888119023728174, API error details:
2025-11-13T07:55:06.3472359Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69158ed548f3d02bc50c6c3a/clusters
2025-11-13T07:55:06.3473134Z         POST: HTTP 403 Forbidden (Error code:
2025-11-13T07:55:06.3473824Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-13T07:55:06.3474388Z         Configuration. Contains selections that are unavailable due to your
2025-11-13T07:55:06.3474945Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-13T07:55:06.3475356Z         BadRequestDetail: 
2025-11-13T07:55:06.3528477Z   
2025-11-13T07:55:07.0015482Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (8.57s)
```
