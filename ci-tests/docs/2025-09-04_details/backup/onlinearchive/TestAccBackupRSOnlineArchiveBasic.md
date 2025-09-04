# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 02:00](#error-2025-08-17t0200040000) | UNEXPECTED_ERROR /api/atlas/v1.0/groups/68a12a43aafa9a76ca8c5c4f/clusters/test-acc-tf-c-1906442273953409356/onlineArchives/68a1307faafa9a76ca8c7bc7 | qa | flaky_500 | 1841.03s
[2025-08-24 01:28](#error-2025-08-24t0128520000) |  | qa | timeout | 1638.08s
[2025-08-25 01:28](#error-2025-08-25t0128190000) |  | dev | timeout | 1939.09s
[2025-08-28 01:28](#error-2025-08-28t0128330000) |  | dev | timeout | 2366.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 30 minutes
- 2025-08-07 PASS 42 minutes
- 2025-08-08 PASS 22 minutes
- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 29 minutes
- 2025-08-11 PASS 38 minutes
- 2025-08-12
  - PASS 19 minutes
  - PASS 22 minutes
- 2025-08-13 PASS 31 minutes
- 2025-08-14 PASS 28 minutes
- 2025-08-15 PASS 18 minutes
- 2025-08-16 PASS 29 minutes
- 2025-08-17

### Error 2025-08-17T02:00:04+00:00
```
2025-08-17T02:00:04.2397304Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-08-17T02:00:04.2401490Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-08-17T02:00:04.2405374Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-08-17T02:00:04.2406208Z     pre_check.go:40: Time before creating cluster: 2025-08-17T01:03:21.271500078Z, ProjectID: 68a12a43aafa9a76ca8c5c4f, Cluster name: test-acc-tf-c-1906442273953409356
2025-08-17T02:00:04.2431579Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-08-17T02:00:04.2432298Z     resource_online_archive_test.go:131: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-17T02:00:04.2432821Z         
2025-08-17T02:00:04.2434587Z         Error: error deleting MongoDB Atlas Online Archive: DELETE https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/68a12a43aafa9a76ca8c5c4f/clusters/test-acc-tf-c-1906442273953409356/onlineArchives/68a1307faafa9a76ca8c7bc7: 500 (request "UNEXPECTED_ERROR") Unexpected error. archive_id (68a1307faafa9a76ca8c7bc7)
2025-08-17T02:00:04.2435870Z         
2025-08-17T02:00:04.2436147Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1841.26s)
```

- 2025-08-18 PASS 30 minutes
- 2025-08-19 PASS 30 minutes
- 2025-08-20
  - PASS 26 minutes
  - PASS 23 minutes
- 2025-08-21 PASS 24 minutes
- 2025-08-22 PASS 19 minutes
- 2025-08-23 PASS 28 minutes
- 2025-08-24

### Error 2025-08-24T01:28:52+00:00
```
2025-08-24T01:28:52.2050713Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-08-24T01:28:52.2054350Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-08-24T01:28:52.2056961Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-08-24T01:28:52.2057768Z     pre_check.go:40: Time before creating cluster: 2025-08-24T00:47:26.056480675Z, ProjectID: 68aa610c9bbb8c4ee1f88794, Cluster name: test-acc-tf-c-8565149004973009572
2025-08-24T01:28:52.2070454Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-08-24T01:28:52.2071386Z     resource_online_archive_test.go:131: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-24T01:28:52.2076423Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1638.76s)
```

- 2025-08-25

### Error 2025-08-25T01:28:19+00:00
```
2025-08-25T01:28:19.2004217Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-08-25T01:28:19.2008788Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-08-25T01:28:19.2013199Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-08-25T01:28:19.2014110Z     pre_check.go:40: Time before creating cluster: 2025-08-25T00:56:18.828120328Z, ProjectID: 68abb49c16afe76254e99e57, Cluster name: test-acc-tf-c-1230588477358739278
2025-08-25T01:28:19.2042690Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-08-25T01:28:19.2043570Z     resource_online_archive_test.go:131: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-25T01:28:19.2045896Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1939.87s)
```

- 2025-08-26 PASS 29 minutes
- 2025-08-27 PASS 21 minutes
- 2025-08-28

### Error 2025-08-28T01:28:33+00:00
```
2025-08-28T01:28:33.0975515Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-08-28T01:28:33.0982271Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-08-28T01:28:33.0993538Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-08-28T01:28:33.0995107Z     pre_check.go:40: Time before creating cluster: 2025-08-28T00:47:52.337602648Z, ProjectID: 68afa71d459686403a80914b, Cluster name: test-acc-tf-c-6454123086216315871
2025-08-28T01:28:33.1035955Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-08-28T01:28:33.1037496Z     resource_online_archive_test.go:131: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-28T01:28:33.1039436Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (2366.01s)
```

- 2025-08-29 PASS 22 minutes
- 2025-08-30 PASS 29 minutes
- 2025-08-31 PASS 24 minutes
- 2025-09-01
  - PASS 2 hours
  - PASS 19 minutes
  - PASS 21 minutes
  - PASS 27 minutes
  - PASS 20 minutes
  - PASS 28 minutes
  - PASS 26 minutes
  - PASS 29 minutes
- 2025-09-02 PASS 32 minutes
- 2025-09-03 PASS 26 minutes
- 2025-09-04 PASS 29 minutes