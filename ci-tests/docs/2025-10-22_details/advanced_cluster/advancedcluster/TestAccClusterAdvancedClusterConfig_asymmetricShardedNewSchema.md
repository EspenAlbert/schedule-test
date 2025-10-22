# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 40) FAIL(x 4)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-06 00:28](#error-2025-10-06t0028210000) | Step 1 2 | dev | flaky_client | 823.10s
[2025-10-18 00:26](#error-2025-10-18t0026520000) | Step 1 2 | dev |  | 886.04s
[2025-10-20 10:26](#error-2025-10-20t1026370000) | Step 1 2 | dev |  | 799.06s
[2025-10-21 00:28](#error-2025-10-21t0028270000) | Step 1 2 | dev | unknown | 888.10s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 24 minutes
- 2025-09-24 PASS 23 minutes
- 2025-09-25 PASS 24 minutes
- 2025-09-26 PASS 22 minutes
- 2025-09-27 PASS 13 minutes
- 2025-09-28 PASS 21 minutes
- 2025-09-29
  - PASS 23 minutes
  - PASS 12 minutes
- 2025-09-30
  - PASS 18 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 15 minutes
  - PASS 12 minutes
- 2025-10-01
  - PASS 40 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 14 minutes
- 2025-10-02 PASS 15 minutes
- 2025-10-03 PASS 20 minutes
- 2025-10-04 PASS 24 minutes
- 2025-10-05 PASS 12 minutes
- 2025-10-06

### Error 2025-10-06T00:28:21+00:00
```
2025-10-06T00:28:21.6603730Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-06T00:29:55.7354046Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-06T00:39:05.9002746Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-10-06T00:39:05.9005387Z     resource_test.go:726: Step 1/2 error: Check failed: Check 2/2 error: error getting independent shard scaling mode: Get "https://cloud-dev.mongodb.comtest/utils/auth/groups/68e30d87065c07374c4431da/clusters/test-acc-tf-c-4066083072160634902/independentShardScalingMode": dial tcp: lookup cloud-dev.mongodb.comtest on 127.0.0.53:53: no such host
2025-10-06T00:43:39.6915085Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (823.98s)
```

- 2025-10-07 PASS 17 minutes
- 2025-10-08 PASS 20 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 24 minutes
- 2025-10-11 PASS 20 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 24 minutes
- 2025-10-14 PASS 18 minutes
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
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-10-21T00:28:27.374000+00:00-TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema',confidence=1.0,ts_when='a day ago')
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