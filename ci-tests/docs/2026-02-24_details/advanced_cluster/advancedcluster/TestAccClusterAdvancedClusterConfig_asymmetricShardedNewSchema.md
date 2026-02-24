# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 25) FAIL(x 8)
Success rate: 75.76%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035260000) |  | dev | timeout | 10841.05s
[2026-02-02 00:38](#error-2026-02-02t0038540000) |  | dev | timeout | 10842.09s
[2026-02-03 00:39](#error-2026-02-03t0039360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814461e3c7fce231805af6/clusters | dev | out_of_capacity | 11.00s
[2026-02-14 00:38](#error-2026-02-14t0038300000) | Step 1 2 | dev |  | 1556.08s
[2026-02-17 00:38](#error-2026-02-17t0038420000) | Step 1 2 | dev |  | 1463.08s
[2026-02-19 00:39](#error-2026-02-19t0039560000) | Step 1 2 | dev |  | 2621.06s
[2026-02-21 00:37](#error-2026-02-21t0037040000) | Step 1 2 | dev |  | 1464.04s
[2026-02-24 00:37](#error-2026-02-24t0037120000) | Step 1 2 | dev |  | 1584.04s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 14 minutes
- 2026-01-27 PASS 20 minutes
- 2026-01-28 PASS 20 minutes
- 2026-01-29 PASS 33 minutes
- 2026-01-30 PASS 31 minutes
- 2026-01-31

### Error 2026-01-31T00:35:26+00:00
```
2026-01-31T00:35:26.7115492Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-01-31T00:36:56.1521799Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-01-31T03:37:06.3970922Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-01-31T03:37:06.3971844Z     resource_test.go:676: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:06.3972478Z         
2026-01-31T03:37:06.3972924Z         Error: Error in create
2026-01-31T03:37:06.3973358Z         
2026-01-31T03:37:06.3974162Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:06.3975623Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:06.3976887Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:06.3977487Z         
2026-01-31T03:37:06.3978348Z         cluster=test-acc-tf-c-6826950583070333973 didn't reach desired state: IDLE,
2026-01-31T03:37:06.3979230Z         error: context deadline exceeded
2026-01-31T03:37:06.7752219Z   
2026-01-31T03:37:37.6130897Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (10841.46s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:54+00:00
```
2026-02-02T00:38:54.5402902Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-02T00:40:19.8901974Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-02T03:40:31.8103439Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-02T03:40:31.8104592Z     resource_test.go:676: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:31.8105345Z         
2026-02-02T03:40:31.8105807Z         Error: Error in create
2026-02-02T03:40:31.8106268Z         
2026-02-02T03:40:31.8106843Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:31.8107643Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:31.8108376Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:31.8108852Z         
2026-02-02T03:40:31.8109384Z         cluster=test-acc-tf-c-4736270398462088472 didn't reach desired state: IDLE,
2026-02-02T03:40:31.8110122Z         error: context deadline exceeded
2026-02-02T03:40:35.4616923Z   
2026-02-02T03:41:02.8154315Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (10842.93s)
```

- 2026-02-03

### Error 2026-02-03T00:39:36+00:00
```
2026-02-03T00:39:36.2434992Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-03T00:42:03.6681574Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-03T00:42:13.8350826Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-03T00:42:13.8351847Z     resource_test.go:676: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:13.8352500Z         
2026-02-03T00:42:13.8352929Z         Error: Error in create
2026-02-03T00:42:13.8353342Z         
2026-02-03T00:42:13.8353916Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:13.8355097Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:13.8356218Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:13.8356778Z         
2026-02-03T00:42:13.8357541Z         cluster name: test-acc-tf-c-3274380255292931476, API error details:
2026-02-03T00:42:13.8358738Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814461e3c7fce231805af6/clusters
2026-02-03T00:42:13.8360098Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:13.8361219Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:13.8362012Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:13.8959184Z   
2026-02-03T00:42:14.6640323Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (11.00s)
```

- 2026-02-04 PASS 25 minutes
- 2026-02-05 PASS 29 minutes
- 2026-02-06 PASS 27 minutes
- 2026-02-07 PASS 24 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 27 minutes
- 2026-02-10 PASS 24 minutes
- 2026-02-11 PASS 25 minutes
- 2026-02-12 PASS 26 minutes
- 2026-02-13 PASS 26 minutes
- 2026-02-14

### Error 2026-02-14T00:38:30+00:00
```
2026-02-14T00:38:30.1916655Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-14T00:39:55.2155199Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-14T01:02:17.1717402Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-14T01:02:17.1718988Z     resource_test.go:676: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-14T01:02:17.1719815Z         <head>
2026-02-14T01:02:17.1720411Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-14T01:02:17.1720867Z         <title>Error 401 Unauthorized</title>
2026-02-14T01:02:17.1721312Z         </head>
2026-02-14T01:02:17.1721703Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-14T01:02:17.1722071Z         <table>
2026-02-14T01:02:17.1722887Z         <tr><th>URI:</th><td>/test/utils/auth/groups/698fc4604f915aaf2d322624/clusters/test-acc-tf-c-4429840279526291333/independentShardScalingMode</td></tr>
2026-02-14T01:02:17.1723579Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-14T01:02:17.1723963Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-14T01:02:17.1724264Z         </table>
2026-02-14T01:02:17.1724479Z         
2026-02-14T01:02:17.1724690Z         </body>
2026-02-14T01:02:17.1725029Z         </html>
2026-02-14T01:05:52.0288748Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1556.82s)
```

- 2026-02-15: MISSING
- 2026-02-16 PASS 27 minutes
- 2026-02-17

### Error 2026-02-17T00:38:42+00:00
```
2026-02-17T00:38:42.1891212Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-17T00:40:28.2931708Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-17T01:02:18.4090255Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-17T01:02:18.4091810Z     resource_test.go:676: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-17T01:02:18.4092744Z         <head>
2026-02-17T01:02:18.4093226Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-17T01:02:18.4093723Z         <title>Error 401 Unauthorized</title>
2026-02-17T01:02:18.4094109Z         </head>
2026-02-17T01:02:18.4094633Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-17T01:02:18.4095064Z         <table>
2026-02-17T01:02:18.4095957Z         <tr><th>URI:</th><td>/test/utils/auth/groups/6993b9003bd1e05530d48175/clusters/test-acc-tf-c-1173660105460129026/independentShardScalingMode</td></tr>
2026-02-17T01:02:18.4096695Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-17T01:02:18.4097117Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-17T01:02:18.4097440Z         </table>
2026-02-17T01:02:18.4097656Z         
2026-02-17T01:02:18.4097878Z         </body>
2026-02-17T01:02:18.4098098Z         </html>
2026-02-17T01:04:52.0322707Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1463.75s)
```

- 2026-02-18 PASS 28 minutes
- 2026-02-19

### Error 2026-02-19T00:39:56+00:00
```
2026-02-19T00:39:56.2114860Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-19T00:42:27.0888454Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-19T01:14:26.3359822Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-19T01:14:26.3360724Z     resource_test.go:675: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-19T01:14:26.3361441Z         <head>
2026-02-19T01:14:26.3362043Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-19T01:14:26.3362543Z         <title>Error 401 Unauthorized</title>
2026-02-19T01:14:26.3363001Z         </head>
2026-02-19T01:14:26.3363652Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-19T01:14:26.3364331Z         <table>
2026-02-19T01:14:26.3365228Z         <tr><th>URI:</th><td>/test/utils/auth/groups/69965c785b4417cf65ba2d1a/clusters/test-acc-tf-c-8747753679086723843/independentShardScalingMode</td></tr>
2026-02-19T01:14:26.3365974Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-19T01:14:26.3366394Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-19T01:14:26.3366730Z         </table>
2026-02-19T01:14:26.3366955Z         
2026-02-19T01:14:26.3367174Z         </body>
2026-02-19T01:14:26.3367393Z         </html>
2026-02-19T01:26:08.6508448Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (2621.59s)
```

- 2026-02-20 PASS 28 minutes
- 2026-02-21

### Error 2026-02-21T00:37:04+00:00
```
2026-02-21T00:37:04.3064419Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-21T00:38:40.2568769Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-21T01:00:30.6844705Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-21T01:00:30.6845712Z     resource_test.go:675: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-21T01:00:30.6846422Z         <head>
2026-02-21T01:00:30.6847187Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-21T01:00:30.6847804Z         <title>Error 401 Unauthorized</title>
2026-02-21T01:00:30.6848188Z         </head>
2026-02-21T01:00:30.6848624Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-21T01:00:30.6848937Z         <table>
2026-02-21T01:00:30.6849816Z         <tr><th>URI:</th><td>/test/utils/auth/groups/6998fe9531d3075768ab0e8c/clusters/test-acc-tf-c-6656477739364446576/independentShardScalingMode</td></tr>
2026-02-21T01:00:30.6850559Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-21T01:00:30.6850980Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-21T01:00:30.6851299Z         </table>
2026-02-21T01:00:30.6851521Z         
2026-02-21T01:00:30.6851737Z         </body>
2026-02-21T01:00:30.6851955Z         </html>
2026-02-21T01:03:04.6711203Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1464.42s)
```

- 2026-02-22: MISSING
- 2026-02-23 PASS 27 minutes
- 2026-02-24

### Error 2026-02-24T00:37:12+00:00
```
2026-02-24T00:37:12.0965940Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-24T00:40:00.5496501Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-24T01:03:20.7166633Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-24T01:03:20.7167699Z     resource_test.go:675: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-24T01:03:20.7168297Z         <head>
2026-02-24T01:03:20.7168790Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-24T01:03:20.7169294Z         <title>Error 401 Unauthorized</title>
2026-02-24T01:03:20.7169585Z         </head>
2026-02-24T01:03:20.7169916Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-24T01:03:20.7170235Z         <table>
2026-02-24T01:03:20.7171175Z         <tr><th>URI:</th><td>/test/utils/auth/groups/699cf3658dfec41eaa86c667/clusters/test-acc-tf-c-2535580593598597318/independentShardScalingMode</td></tr>
2026-02-24T01:03:20.7172136Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-24T01:03:20.7172807Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-24T01:03:20.7173135Z         </table>
2026-02-24T01:03:20.7173349Z         
2026-02-24T01:03:20.7173550Z         </body>
2026-02-24T01:03:20.7173765Z         </html>
2026-02-24T01:06:24.8949955Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1584.35s)
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
- 2026-02-01 PASS 20 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 17 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 17 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 15 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
